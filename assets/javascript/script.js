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

//Sound variables
var winAudio = new Audio('../Word-Guess-Game/assets/audio/win.mp3')
var loseAudio = new Audio('../Word-Guess-Game/assets/audio/lose.mp3')

//Word Banks - 22 words + Alphabet
var wordBank = "avocado asparagus beans broccoli carrot celery cucumber garlic greenbean lettuce onion pepper peanut potato pumpkin radish salad spinach squash tomato yam zucchini";
var alphabet = "abcdefghijklmnopqrstuvwxyz";

//Splits word banks into new arrays
var wordArray = wordBank.split(" ");
var alphaArray = alphabet.split("");

//Scoreboard
var score = 
"<p>Wins: " + wins +  "</p>" +
"<p>Losses: " + losses + "</p>"


// attempts to find x inside of y - returns boolean
function indexOf (x, y) {
    return y.indexOf(x) > -1 // true or false
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

//Check if lost
function lossCheck () {
    if (guessesLeft === 0) {
        gameOver = true;
        wrongLtrs = [];
        loseAudio.play()
        losses++;
        document.getElementById("remguess").innerHTML = "You Lost!";
        document.getElementById("compword").innerHTML =  choice;
        document.getElementById("usedletter").innerHTML = wrongLtrs;
        document.getElementById("score").innerHTML = score;

    }
}

//Attach image function
function image(x) {
    var myImage = new Image(250, 250);
    myImage.src = x;
    document.getElementById("image").appendChild(myImage);
}

// Check for Win
function winCheck() {
    check = indexOf(" _ ", userLtrs)
    if (check !== true) {
        wrongLtrs = [];
        gameOver = true;
        wins++
        winAudio.play()
        document.getElementById("remguess").innerHTML = "You won!"
        document.getElementById("usedletter").innerHTML = wrongLtrs;
        document.getElementById("score").innerHTML = score;

        //Pictures associated with word
        if (choice === "avocado") {
            image('../Word-Guess-Game/assets/images/avocado.jpg')
        } else if (choice === "asparagus") {
            image('../Word-Guess-Game/assets/images/asparagus.jpg')
        } else if (choice === "beans") {
            image('../Word-Guess-Game/assets/images/beans.jpg')
        } else if (choice === "broccoli") {
            image('../Word-Guess-Game/assets/images/broccoli.jpg')
        } else if (choice === "carrot") {
            image('../Word-Guess-Game/assets/images/carrot.jpg')
        } else if (choice === "celery") {
            image('../Word-Guess-Game/assets/images/celery.jpg')
        } else if (choice === "cucumber") {
            image('../Word-Guess-Game/assets/images/cucumber.jpg') 
        } else if (choice === "garlic") {
            image('../Word-Guess-Game/assets/images/garlic.jpg')
        } else if (choice === "greenbean") {
            image('../Word-Guess-Game/assets/images/greenbean.jpg')
        } else if (choice === "lettuce") {
            image('../Word-Guess-Game/assets/images/lettuce.jpg')
        } else if (choice === "onion") {
            image('../Word-Guess-Game/assets/images/onion.jpg')
        } else if (choice === "pepper") {
            image('../Word-Guess-Game/assets/images/pepper.jpg')
        } else if (choice === "peanut") {
            image('../Word-Guess-Game/assets/images/peanut.jpg')
        } else if (choice === "potato") {
            image('../Word-Guess-Game/assets/images/potato.jpg')
        } else if (choice === "pumpkin") {
            image('../Word-Guess-Game/assets/images/pumpkin.jpg')
        } else if (choice === "radish") {
            image('../Word-Guess-Game/assets/images/radish.jpg')
        } else if (choice === "salad") {
            image('../Word-Guess-Game/assets/images/spinach.jpg')
        } else if (choice === "squash") {
            image('../Word-Guess-Game/assets/images/squash.jpg')
        } else if (choice === "tomato") {
            image('../Word-Guess-Game/assets/images/tomato.jpg')
        } else if (choice === "yam") {
            image('../Word-Guess-Game/assets/images/yam.jpg')
        } else if (choice === "zucchini") {
            image('../Word-Guess-Game/assets/images/zucchini.jpg')
        }


    }
    
}


    
    



// --------------------------------------------------------------------------------------------
//Key Up interactions
document.onkeyup = function(event) {
    userGuess = event.key
    userGuess1 = event.keyCode
    win = userLtrs.join("")
    
    userGuessInAlpha = indexOf(userGuess, alphaArray);
    correctGuess = indexOf(userGuess, choiceArr);

    compWord = document.getElementById("compword");
    remguess = document.getElementById("remguess");
    wrongltr = document.getElementById("usedletter");

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
            //Will replace underscore with correct letters
            for (i=0; i < choiceArr.length; i++){
                if (userGuess === choiceArr[i]) {
                userLtrs[i] = userGuess
                compWord.innerHTML = userLtrs.join("")
                }   
            } 
        //If guess is not correct, and is an A-Z letter, store in wrongLtrs array
        } else if ((userGuessInAlpha) && (correctGuess !== true) && (userGuess !== false) && (indexOf(userGuess, wrongLtrs) === false))  {
            wrongLtrs.push(userGuess)
            wrongltr.innerHTML = wrongLtrs
            guessesLeft--;
            remguess.innerHTML = "Guesses: " + guessesLeft;
        }
        lossCheck()
        winCheck()
    } 

   
//Scoreboard
score


}; // This is the end of onkeyup
