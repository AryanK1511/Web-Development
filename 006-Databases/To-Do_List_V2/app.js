const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const mongoose = require("mongoose");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

// Connecting to the to do list database
mongoose.connect("mongodb://localhost:27017/todolistDB", { useNewUrlParser: true });

// Creating a schema
const itemsSchema = new mongoose.Schema({
  name: String
})

// Creating a model
const Item = mongoose.model("Item", itemsSchema);

// Creating default documents
const item1 = new Item({
  name: "Welcome to your todolist!"
})

const item2 = new Item({
  name: "Hit the + button to add a new item."
})

const item3 = new Item({
  name: "<-- Hit this to delete an item."
})

const defaultItems = [item1, item2, item3];

// Creating a new schema for custom lists
const ListSchema = {
  name: String,
  items: [itemsSchema]
};

// Creating a model
const List = mongoose.model("List", ListSchema);

app.get("/", function(req, res) {

  const day = date.getDate();

  Item.find({}, function(err, foundItems) {
    // Only insert the default items if they don't exist already
    if (foundItems.length === 0) {
      Item.insertMany(defaultItems, function(err) {
        if (err) {
          console.log(err);
        }
        else {
          console.log("Successfully saved default items to collection.");
        }
      });
      res.redirect("/");
    }
    else {
      if (err) {
        console.log(err);
      }
      else {
        res.render("list", {listTitle: "Today", newListItems: foundItems});
      }
    }
  })
});

app.post("/", function(req, res){

  const itemName = req.body.newItem;
  const listName = req.body.list;

  const item = new Item({
    name: itemName
  });

  if (listName === "Today") {
    item.save();
    res.redirect("/");
  }
  else {
    List.findOne({name: listName}, function(err, foundList) {
      if (err) {
        console.log(err);
      }
      else {
        foundList.items.push(item);
        foundList.save();
        res.redirect("/" + listName);
      }
    })
  }

});

app.post("/delete", function(req, res) {
  const checkedItemID = req.body.checkbox;

  Item.findByIdAndRemove(checkedItemID, function(err) {
    if (err) {
      console.log(err);
    }
    else {
      console.log("Successfully deleted checked item.");
      res.redirect("/");
    }
  })
})

app.get("/:customListName", function(req, res) {
  const customListName = req.params.customListName;

  List.findOne({name: customListName}, function(err, foundList) {
    if (err) {
      console.log(err);
    }
    else {
      if (!foundList) {
        // Create a new list
        const list = new List ({
          name: customListName,
          items: defaultItems
        })
      
        list.save();
        res.redirect("/" + customListName);
      }
      else {
        // Show an existing list
        res.render("list", {listTitle: customListName, newListItems: foundList.items});
      }
    }
  })
})

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
