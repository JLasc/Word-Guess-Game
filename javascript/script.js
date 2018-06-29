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
var wrongLtrs = []; // used
var choiceArr = []; // used
var userLtrs = []; //used 

//Word Banks - 23 words + Alphabet
var wordBank = "avocado asparagus beans broccoli carrot celery cucumber garlic greenbean lettuce onion pepper peanut potato pumpkin radish salad spinach squash tomato yam zucchini";
var alphabet = "abcdefghijklmnopqrstuvwxyz";

//Splits word banks into new arrays
var wordArray = wordBank.split(" ");
var alphaArray = alphabet.split("");

var score = 
"<p>Wins: " + wins +  "</p>" +
"<p>Losses: " + losses + "</p>"



//keyShadow attempts to find x inside of y - returns boolean
function indexOf (x, y) {
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
    document.getElementById("score").innerHTML = score;
}

function lossCheck () {
    if (guessesLeft === 0) {
        gameOver = true;
        wrongLtrs = [];
        losses++;
        document.getElementById("remguess").innerHTML = "You Lost!";
        document.getElementById("compword").innerHTML =  choice;
        document.getElementById("usedletter").innerHTML = wrongLtrs;
        document.getElementById("score").innerHTML = score;

    }
}

function winCheck() {
    check = indexOf(" _ ", userLtrs)
    if (check !== true) {
        wrongLtrs = [];
        gameOver = true;
        wins++
        document.getElementById("remguess").innerHTML = "You won!"
        document.getElementById("usedletter").innerHTML = wrongLtrs;
        document.getElementById("score").innerHTML = score;

        
    }
}

function sameLetter() {
    same = indexOf(userGuess, wrongLtrs)
    if (same === true) {
        userGuess
    }
}


// --------------------------------------------------------------------------------------------
//Key Up interactions
document.onkeyup = function(event) {
    userGuess = event.key
    userGuess1 = event.keyCode
    console.log(userGuess, userGuess1);
    compWord = document.getElementById("compword");
    userGuessInAlpha = indexOf(userGuess, alphaArray);
    correctGuess = indexOf(userGuess, choiceArr);
    remguess = document.getElementById("remguess");
    wrongltr = document.getElementById("usedletter");
    win = userLtrs.join("")

    if (gameOver) {
        guessesLeft = 13;
        userLtrs = [];
        

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
            //Will replace underscore with correct letters
            for (i=0; i < choiceArr.length; i++){
                if (userGuess === choiceArr[i]) {
                userLtrs[i] = userGuess
                compWord.innerHTML = userLtrs.join("")
                }   
            } 
        //If guess is not correct, and is an A-Z letter, store in wrongLtrs array
        } else if ((userGuessInAlpha) && (correctGuess !== true) && (userGuess !== false)) {
            wrongLtrs.push(userGuess)
            wrongltr.innerHTML = wrongLtrs
            console.log("this letter is wrong");
            guessesLeft--;
            remguess.innerHTML = "Guesses: " + guessesLeft;
        } 
        lossCheck()
        winCheck()
    } 

   
//Scoreboard
score


}; // This is the end of onkeyup
