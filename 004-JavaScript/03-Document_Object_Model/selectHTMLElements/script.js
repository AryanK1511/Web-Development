// Selecting HTML elements using the tag name
console.log(document.getElementsByTagName("li"));
document.getElementsByTagName("li")[2].style.color = "purple";
console.log(document.getElementsByTagName("li").length);

// Selecting HTML elements by using the class name
console.log(document.getElementsByClassName("item"));
document.getElementsByTagName("li")[2].style.color = "red";
console.log(document.getElementsByTagName("li").length);

// Selecting HTML elements by using the ID
console.log(document.getElementById("title"));
document.getElementById("title").innerHTML = "Good Bye!";

// Selecting HTML elements in general
console.log(document.querySelector(".item"));
console.log(document.querySelectorAll(".item"));

// Changing CSS Styles of HTML Elements
document.querySelector("#title").style.color = "red";
document.querySelector("#title").style.fontSize = "5rem"; // All values have to specified as strings
document.getElementsByClassName("btn")[0].style.backgroundColor = "yellow";

// Class list
console.log(document.querySelector("#title").classList);
document.querySelector("#title").classList.add('large');
document.querySelector("#title").classList.remove('large');
document.querySelector("#title").classList.toggle('large');

// Text Manipulation and Text Content Property
document.querySelector("#title").textContent = "Hello World!";

// Manipulating HTML element attributes
console.log(document.querySelector("a").getAttribute("href"));
console.log(document.querySelector("a").setAttribute("href", "https://www.bing.com/"));