// Changing heading color with jQuery
$("h1").css("color", "red");

// Selecting all the buttons on the screen
$("button");

// Getting the value of a style
console.log($("h1").css("font-size"));

// Using jQuery to add class to our selected element
$("h1").addClass("big-title");

// Removing class
$("h1").removeClass("big-title");

// Adding Multiple classes
$("h1").addClass("big-title margin-50");

// Checking whether an element has a class
console.log($("h1").hasClass("margin-50"));

// Manipulating text with jQuery
$("h1").text("Bye!");

// Editing innerHtml
$("button").html("<em>Hey</em>")

// Manipulating attributes with jQuery
console.log($("img").attr("src"));
console.log($("a").attr("href", "https://www.youtube.com/"));