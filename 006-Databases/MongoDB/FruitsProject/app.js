const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true });

const fruitSchema = new mongoose.Schema ({
    // Data Validation using mongoose
    name: {
        type: String,
        required: [true, "Please check your data entry, no name specified!"]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

// To Insert a single Fruit
const fruit = new Fruit ({
    name: "Apple",
    rating: 7,
    review: "Pretty solid as a fruit."
})

// To save the changes in our database
fruit.save();

const kiwi = new Fruit({
    name: "Kiwi",
    score: 10,
    review: "The best fruit."
})

const orange = new Fruit({
    name: "Orange",
    score: 4,
    review: "Too sour for me"
})

const banana = new Fruit({
    name: "Banana",
    score: 3,
    review: "Weird Texture"
})

// Inserting multiple items in your database
Fruit.insertMany([kiwi, orange, banana], function(err) {
    if (err) {
        console.log(err);
    }
    else {
        console.log("Successfully saved all fruits to fruitsDB!");
    }
});

const personSchema = new mongoose.Schema ({
    name: String,
    age: Number,
    favouriteFruit: fruitSchema
})


const pineapple = new Fruit({
    name: "Pineapple",
    score: 9,
    review: "Great Fruit!"
})

pineapple.save();

const Person = mongoose.model("Person", personSchema);

const person = new Person({
    name: "Amy",
    age: 12,
    favouriteFruit: pineapple
})

person.save();

// Reading from database
Fruit.find(function(err, fruits) {
    if (err) {
        console.log(err);
    }
    else {
        mongoose.connection.close();
        // Looping through the fruits array and printing only the names
        fruits.forEach((fruit) => {
            console.log(fruit.name);
        })
    }
})

// // Updating data in database
Fruit.updateOne({_id: "63476b2c5adceb32fb9c8fbf"}, {name: "Peach", review: "Peaches are pretty good!"}, function(err) {
    if (err) {
        console.log(err);
    }
    else {
        console.log("Successfully updated the document!");
    }
})

// // Deleting data in a database
Fruit.deleteOne({_id: "63476bbfd76ceab628f848a2"}, function(err) {
    if (err) {
        console.log(err);
    }
    else {
        console.log("Document Successfully deleted");
    }
})

// // You can also use the deleteMany Function
Fruit.deleteMany({name: "Apple"}, function(err) {
    if (err) {
        console.log(err);
    }
    else {
        console.log("Documents Successfully Deleted");
    }
})