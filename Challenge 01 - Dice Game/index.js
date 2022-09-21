let randomNumber1 = Math.floor((Math.random()) * 6) + 1;
let img1 = document.getElementsByClassName('img1')[0];
img1.setAttribute("src", `./images/dice${randomNumber1}.png`);

let randomNumber2 = Math.floor((Math.random()) * 6) + 1;
let img2 = document.getElementsByClassName('img2')[0];
img2.setAttribute("src", `./images/dice${randomNumber2}.png`);

let heading = document.getElementsByTagName('h1')[0];

// Changing the title to determine the winner
if (randomNumber1 > randomNumber2) {
    heading.innerHTML = "Player 1 Wins! 🏆";
}
else if (randomNumber2 > randomNumber1) {
    heading.innerHTML = "Player 2 Wins! 🏆";
}
else {
    heading.innerHTML = "It is a Tie! 🤝";
}