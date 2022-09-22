// Initializing an object
var bellBoy1 = {
    firstName: "Timmy",
    age: 19,
    hasWorkPermit: true,
    languages: ["French", "English"],
    clean: function() {
        console.log("Cleaning....");
    }
}

// Accessing Object Properties
console.log(bellBoy1.firstName);
console.log(bellBoy1.age);
console.log(bellBoy1.languages[1]);
bellBoy1.clean();

// Constructor Function
function BellBoy(name, age, hasWorkPermit, languages) {
    this.name = name;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.languages = languages;
}

// Initializing object using constructor function
var bellBoy2 = new BellBoy("John", 20, true, ["English", "Spanish"]);

// Accessing properties
console.log(bellBoy2.name);
console.log(bellBoy2.languages);