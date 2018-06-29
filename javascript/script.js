// Add a function that checks the winning condition 
// Limit wrong guesses and decrement
// link remaining guesses to #remguess
// Add images? 


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



//Word Banks - 169 words + Alphabet
var wordBank = "avocado, asparagus, beans, broccoli, carrot, celery, cucumber, garlic, greenbean, lettuce, onion, pepper, peanut, potato, pumpkin, radish, salad, spinach, squash, tomato, yam, zucchini";
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

    if (gameOver) {
        //User presses 'space' to start the game.
        if (userGuess1 === 32) {
            gameStart();
            gameOver = false;
            remWord.innerHTML = "Guesses Left: " + guessesLeft;

        } else {
            compWord.innerHTML = "You need to press space to start."
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
        } else {
            console.log("this word is not in array")
                wrongLtrs.push(userGuess);
                    document.getElementById("usedletter").innerHTML = wrongLtrs.join("")
    }
       
}





        
        /* gameStart() */

     /*    if(choiceString.indexOf(userGuess) === -1) {
            test = wrongLtrs.push(userGuess)
            console.log(test) */
    




};
