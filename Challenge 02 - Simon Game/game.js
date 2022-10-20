let gamePattern = [];
let userClickedPattern = [];
let level = 0;
let isStarted = false;

// Array of colors
const buttonColors = ["red", "blue", "green", "yellow"];

// Generates a random number between 0 and 3
function nextSequence() {
    // Increasing the level
    level++;

    $("#level-title").text("Level " + level);

    // Reset for next level
    userClickedPattern = [];

    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColor = buttonColors[randomNumber];

    // Adding the chosen color to the game pattern
    gamePattern.push(randomChosenColor);

    // Selecting elements
    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

    // Playing sound
    playSound(randomChosenColor);
}

// Function to play the sound according to the color
function playSound(name) {
    let sound = new Audio("sounds/" + name + ".mp3");
    sound.play();
}

// Function to animate whatever button is pressed
function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");

    // Removing 'pressed' class after 100 ms
    setTimeout(function(){
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}

// Checking to see if a button is clicked
$(".btn").click(function() {
    let userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);

    animatePress(userChosenColour);
    playSound(userChosenColour);

    // Passing in the length of clicks - 1
    checkAnswer(userClickedPattern.length - 1);
})

// Starting the game if any key is pressed
$(document).on("keypress", function() {
    if (!isStarted) {
        $("#level-title").text("Level " + level);
        nextSequence(); 
        isStarted = true;
    }
})

// Checking whether the user is entering the correct pattern
function checkAnswer(currentLevel) {
    // Checking whether the latest color is the same
    console.log(gamePattern[currentLevel]);
    console.log(userClickedPattern[currentLevel]);
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        // Checking to make sure next sequence is only called once the lengths are same
      if (userClickedPattern.length === gamePattern.length){
        // Calling next seq after a 1000 ms delay.
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    }
    else {
        playSound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press Any Key to Restart");

        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);

        startOver();
    }
}

// Resetting all the values before starting over
function startOver() {
    level = 0;
    gamePattern = [];
    isStarted = false;
  }