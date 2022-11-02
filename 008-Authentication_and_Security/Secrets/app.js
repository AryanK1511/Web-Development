// require('dotenv').config();

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const findOrCreate = require("mongoose-findorcreate");

// const bcrypt = require("bcrypt");
// const saltRounds = 10;

// const md5 = require("md5");
// const encrypt = require("mongoose-encryption");

const app = express();

app.use(express.static("public"));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

// Place this code here - IMPORTANT
app.use(session({
    secret: "Our little secret.",
    resave: false,
    saveUninitialized: false
  }))

// This sets up passport for us to start using it for authentication
app.use(passport.initialize());

// Use passport for dealing with the sessions
// Cookies get deleted whenever you restart the server
app.use(passport.session());

mongoose.connect("mongodb://localhost:27017/userDB", {useNewUrlParser: true})

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    googleId: String,
    secret: String
});

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);

const User = new mongoose.model("User", userSchema);

passport.use(User.createStrategy());

passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  
  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });

// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

// passport.serializeUser(function(user, cb) {
//     process.nextTick(function() {
//       cb(null, { id: user.id, username: user.username, name: user.displayName });
//     });
//   });
  
//   passport.deserializeUser(function(user, cb) {
//     process.nextTick(function() {
//       return cb(null, user);
//     });
//   });

passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/secrets",
    userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));

// Encrypting the database
// const secret = "Thisisourlittlesecret.";
// userSchema.plugin(encrypt, {secret: process.env.SECRET, encryptedFields: ["password"]});

// ==================== HOME ROUTE ====================
app.get("/", function(req, res) {
    res.render("Home");
})

// =================== GOOGLE AUTHENTICATION ====================
app.get("/auth/google", passport.authenticate("google", { scope: ["profile"] }));

app.get("/auth/google/secrets", 
  passport.authenticate("google", { failureRedirect: "/login" }),
  function(req, res) {
    // Successful authentication, redirect to the secrets page.
    res.redirect('/secrets');
  });

// ==================== LOGIN ROUTE ===================
app.get("/login", function(req, res) {
    res.render("Login");
});

// ==================== REGISTER ROUTE ====================
app.get("/register", function(req, res) {
    res.render("Register");
});

// ==================== SECRETS ROUTE ====================
app.get("/secrets", function(req, res) {
    User.find({"secret": {$ne: null}}, function(err, foundUsers) {
        if (err) {
            console.log(err);
        }
        else {
            res.render("secrets", {usersWithSecrets: foundUsers});
        }
    })
});

// ==================== SUBMIT ROUTE ====================
app.get("/submit", function(req, res) {
    if (req.isAuthenticated()) {
        res.render("submit");
    }
    else {
        res.redirect("/login");
    }
});

// ==================== POSTING TO THE SUBMIT ROUTE ====================
app.post("/submit", function(req, res) {
    const submittedSecret = req.body.secret;

    User.findById(req.user.id, function(err, foundUser) {
        console.log(req.user.id);
        if (err) {
            console.log(err);
        }
        else {
            if (foundUser) {
                foundUser.secret = submittedSecret;
                foundUser.save(function() {
                    res.redirect("/secrets");
                });
            }
        }
    })
});

// ====================== LOGOUT ROUTE ===================
app.get("/logout", function(req, res) {
    req.logout(function(err) {
        if (err) {
            console.log(err);
        }
        else {
            res.redirect("/");
        }
    });
});

// ==================== POSTING TO THE REGISTER ROUTE ====================
app.post("/register", function(req, res) {
    // bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
    //     const newUser = new User({
    //         email: req.body.username,
    //         password: hash
    //     });
    
    //     newUser.save(function(err) {
    //         if (err) {
    //             console.log(err);
    //         }
    //         else {
    //             res.render("secrets");
    //         }
    //     })
    // });

    User.register({username: req.body.username}, req.body.password, function(err, user) {
        if (err) {
            console.log(err);
            res.redirect("/register");
        }
        else {
            passport.authenticate("local")(req, res, function() {
                res.redirect("/secrets");
            })
        }
    })
});

// ==================== POSTING TO THE LOGIN ROUTE ====================
app.post("/login", function(req, res) {

    const user = new User({
        username: req.body.username,
        password: req.body.password
    })

    req.login(user, function(err) {
        if (err) {
            console.log(err);
        }
        else {
            passport.authenticate("local")(req, res, function() {
                res.redirect("/secrets");
            })
        }
    });

    // const username = req.body.username;
    // const password = req.body.password;

    // User.findOne({email: username}, function(err, foundUser) {
    //     if (err) {
    //         console.log(err);
    //     }
    //     else {
    //         if (foundUser) {
    //             // Comparing the two passwords
    //             if (bcrypt.compare(password, foundUser.password, function(err, result) {
    //                 if (result === true) {
    //                     res.render("secrets");
    //                 }
    //             }));
    //         }
    //     }
    // });
});

// Listing for user requests
app.listen(3000, function() {
    console.log("Server started on port 3000");
});