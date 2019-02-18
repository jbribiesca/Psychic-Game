var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guesses = [];

var winsText = document.getElementById("winsspan");
var lossesText = document.getElementById("lossesspan");
var guessesLeftText = document.getElementById("guessesleftspan");
var guessesArr = document.getElementById("guessesspan");

var randomLetter = Math.floor(Math.random() * alphabet.length); 
var letter = alphabet[randomLetter];

document.onkeyup = function(event) { 

        var userGuess = event.key.toLowerCase()
        console.log(letter);
        console.log(event.key);

            if (userGuess === letter) {
                wins++;
                guessesLeft = 9;
                guesses = []
            }
            if (userGuess != letter){
                guessesLeft--;
                guesses.push(userGuess);
            }
            if (guessesLeft === 0){
                losses++;
                guessesLeft = 9;
                guesses = [];
            }

        winsText.textContent = wins;
        lossesText.textContent = losses;
        guessesLeftText.textContent = guessesLeft;
        guessesArr.textContent = guesses.join(", ");

}