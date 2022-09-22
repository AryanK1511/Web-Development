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
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });    
}

document.addEventListener('keydown', function(e) {
    makeSound(e.key);
    buttonAnimation(e.key);
});

function makeSound(key) {
    // Using switch case to determine which button was clicked
    switch (key) {
        case 'w':
            crashSound.play();
            break;
        case 'a':
            kickBassSound.play();
            break;
        case 's':
            snareSound.play();
            break;
        case 'd':
            tom1Sound.play();
            break;
        case 'j':
            tom2Sound.play();
            break;
        case 'k':
            tom3Sound.play();
            break;
        case 'l':
            tom4Sound.play();
            break;
        default:
            console.log(buttonInnerHTML);
    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector('.' + currentKey);
    activeButton.classList.add('pressed');
    setTimeout(function() {
        activeButton.classList.remove('pressed');
    }, 100)
}