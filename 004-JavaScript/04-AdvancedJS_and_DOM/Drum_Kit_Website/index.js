let numberOfDrumButtons = document.querySelectorAll('.drum').length;

// Storing all the audio files
let crashSound = new Audio('./sounds/crash.mp3');
let kickBassSound = new Audio('./sounds/kick-bass.mp3');
let snareSound = new Audio('./sounds/snare.mp3');
let tom1Sound = new Audio('./sounds/tom-1.mp3');
let tom2Sound = new Audio('./sounds/tom-2.mp3');
let tom3Sound = new Audio('./sounds/tom-3.mp3');
let tom4Sound = new Audio('./sounds/tom-4.mp3');

// Using a loop to add event listeners to all of the buttons
for (let i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener('click', function() {
        this
        crashSound.play();
    });    
}