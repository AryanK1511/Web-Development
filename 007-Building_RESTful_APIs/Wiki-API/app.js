const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Connecting to database
mongoose.connect("mongodb://localhost:27017/wikiDB", { useNewUrlParser: true });

const articleSchema = {
  title: String,
  content: String,
};

const Article = mongoose.model("Article", articleSchema);

// ==================== Requests targeting all articles ===================
// Using chainable routes
app.route("/articles")

  // When clients want to fetch all the articles in our database
  .get(function (req, res) {
    Article.find({}, function (err, foundArticles) {
      if (err) {
        res.send(err);
      } else {
        res.send(foundArticles);
      }
    });
  })

  // Client creates one new article
  .post(function (req, res) {
    const newArticle = new Article({
      title: req.body.title,
      content: req.body.content,
    });

    newArticle.save(function (err) {
      if (err) {
        res.send(err);
      } else {
        res.send("Successfully added a new article.");
      }
    });
  })

  // Delete all the articles in our collection
  .delete(function (req, res) {
    Article.deleteMany(function (err) {
      if (!err) {
        res.send("Successfully deleted all articles.");
      } else {
        res.send(err);
      }
    });
  });

  // =================== Requests targeting a specific article ====================
  app.route("/articles/:articleTitle")

    // GET a specific article
    .get(function (req, res) {
        Article.findOne({title: req.params.articleTitle}, function (err, foundArticle) {
          if (err) {
            res.send(err);
          } else {
            if (foundArticle) {
                res.send(foundArticle);
            }
            else {
                res.send("No articles matching the title were found");
            }
          }
        });
      })

     // PUT a specific article
     .put(function(req,res) {
        Article.updateOne(
            {title: req.params.articleTitle}, 
            {title: req.body.title, content: req.body.content},
            function(err) {
                if (err) {
                    res.send(err);
                }
                else {
                    res.send("Successfully updated article.");
                }
            }
        )
     })

     // PATCH a specific article
     .patch(function(req, res) {
        Article.updateOne(
            {title: req.params.articleTitle},
            {$set: req.body},
            function(err) {
                if (!err) {
                    res.send("Successfully updated article.");
                }
                else {
                    res.send(err);
                }
            }
        )
     });

// Listening for requests made by the user
app.listen(3000, function () {
  console.log("Server started at port 3000");
});
