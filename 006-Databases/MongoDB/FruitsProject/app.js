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

fruit.save();

// const kiwi = new Fruit({
//     name: "Kiwi",
//     score: 10,
//     review: "The best fruit."
// })

// const orange = new Fruit({
//     name: "Orange",
//     score: 4,
//     review: "Too sour for me"
// })

// const banana = new Fruit({
//     name: "Banana",
//     score: 3,
//     review: "Weird Texture"
// })

// Inserting multiple items in your database
// Fruit.insertMany([kiwi, orange, banana], function(err) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("Successfully saved all fruits to fruitsDB!");
//     }
// });

// Reading from database
// Fruit.find(function(err, fruits) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         mongoose.connection.close();
//         // Looping through the fruits array and printing only the names
//         fruits.forEach((fruit) => {
//             console.log(fruit.name);
//         })
//     }
// })

// Updating data in database
Fruit.updateOne({_id: "63476b2c5adceb32fb9c8fbf"}, {name: "Peach", review: "Peaches are pretty good!"}, function(err) {
    if (err) {
        console.log(err);
    }
    else {
        console.log("Successfully updated the document!");
    }
})