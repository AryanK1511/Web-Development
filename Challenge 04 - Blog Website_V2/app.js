const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const ejs = require("ejs");
const _ = require("lodash");

// Defining the starting content for all the pages in our website
const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

// Connecting to database
mongoose.connect("mongodb+srv://AryanK1511:chocopiE@blogwebsitecluster.ucqqm8e.mongodb.net/blogDB", {useNewUrlParser: true})

// Creating a schema for the database
const postSchema = {
  title: String,
  content: String
}

// Creating a model
const Post = mongoose.model("Post", postSchema);

// ==================== HOME ROUTE ====================
app.get("/", function(req, res){
  Post.find({}, function(err, posts) {
    res.render("home", {
      startingContent: homeStartingContent,
      posts: posts
    })
  })
});

// =================== ABOUT ROUTE ====================
app.get("/about", function(req, res){
  res.render("about", {aboutContent: aboutContent});
});

// ==================== CONTACT ROUTE ====================
app.get("/contact", function(req, res){
  res.render("contact", {contactContent: contactContent});
});

// ==================== COMPOSE ROUTE ====================
app.get("/compose", function(req, res){
  res.render("compose");
});

// ===================== POST TO COMPOSE ====================
app.post("/compose", function(req, res){

  console.log(req.body.postTitle);
  const post = new Post({
    title: req.body.postTitle,
    content: req.body.postBody
  })

  // Adding a callback so that redirection only happens when post is saved without any errors
  post.save(function(err) {
    if (err) {
      console.log(err);
    }
    else {
      res.redirect("/");
    }
  });

});

// ==================== INDIVIDUAL BLOG POST ROUTE ====================
app.get("/posts/:postId", function(req, res){
  const requestedPostID = req.params.postId;

  Post.findOne({_id: requestedPostID}, function(err, post){
  res.render("post", {
    title: post.title,
    content: post.content
  });
  });

});

// Listening to requests from user
app.listen(process.env.PORT || 3000, function() {
  console.log("Server successfully started.");
});
