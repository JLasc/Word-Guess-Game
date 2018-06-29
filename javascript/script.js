// Add a function that checks the winning condition 
// Limit wrong guesses and decrement
// link remaining guesses to #remguess
// Add images - shorten word bank
// Music 
// 


//Globals

var i;
var choice;
var wins = 0;
var losses = 0;
var guessesLeft = 13;
var gameOver = true;

//Arrays
var wrongLtrs = []; // userd
var choiceArr = []; // used
var userLtrs = []; //used 



//Word Banks - 23 words + Alphabet
var wordBank = "avocado asparagus beans broccoli carrot celery cucumber garlic greenbean lettuce  onion pepper peanut potato pumpkin radish salad spinach squash tomato yam zucchini";
var alphabet = "abcdefghijklmnopqrstuvwxyz";

//Splits word banks into new arrays
var wordArray = wordBank.split(" ");
var alphaArray = alphabet.split("");


// Attempts to find x inside of y - returns boolean
function keyShadow (x, y) {
    return y.indexOf(x) > -1
}

//Function that starts the game.
 function gameStart () {
    compWord = document.getElementById("compword");

    choice = wordArray[Math.floor(Math.random() * wordArray.length)];
    choiceArr = choice.split("");

    for (i=0; i < choiceArr.length; i++) {
        userLtrs.push(" _ ")
    }

        document.getElementById("compword").innerHTML = userLtrs.join("")
}




// Win check function


// --------------------------------------------------------------------------------------------
//Key Up interactions
document.onkeyup = function(event) {
    userGuess = event.key
    userGuess1 = event.keyCode
    console.log(userGuess, userGuess1);
    compWord = document.getElementById("compword");
    shadow = keyShadow(userGuess, alphaArray);
    correctGuess = keyShadow(userGuess, choiceArr);
    remguess = document.getElementById("remguess");

    

    if (gameOver) {
        guessesLeft = 13;
        userLtrs = []
        //User presses 'space' to start the game.
        if (userGuess1 === 32) {
            gameStart();
            gameOver = false;
            document.getElementById("remguess").innerHTML = "Guesses Left: " + guessesLeft;

        } else {
            compWord.innerHTML = "press space to start."
        }

    }

    if (gameOver !== true) {
       
        if (correctGuess) {

            console.log("this is a correct guess")

                for (i=0; i < choiceArr.length; i++){
                    if (userGuess === choiceArr[i]) {
                        userLtrs[i] = userGuess
                            compWord.innerHTML = userLtrs.join("")
                }   
            } 
        } 

        // Wrong guesses decrement
        if ((correctGuess !== true) && (userGuess1 !== 32) && (shadow === true)) {
            console.log("this letter is wrong")
            guessesLeft--
            remguess.innerHTML = guessesLeft
        } 

        //Guesses hit 0 
        if (guessesLeft === 0) {
            console.log("you lose!");
            compWord.innerHTML = choice;
            gameOver = true;
        } 

        
        win = userLtrs.join("")

        if (win === choice) {
            console.log("WINNER WINNER CHICKEN DINNER")
            gameOver = true;
        } else {
            return
        }
        
        
        //User win
        
        

    } // This is the end of gameOver !== true




}; // This is the end of onkeyup
