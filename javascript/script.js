

//Globals

var i;
var choice;
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var gameOver = true;

//Arrays
var wrongLtrs = []; // userd
var choiceArr = []; // used
var userLtrs = []; //used 



//Word Banks - 169 words + Alphabet
var wordBank = "afraid,afterlife,alarming,alien,angel,apparition,astronaut,autumn,ballerina,bat,beast,bizarre,black,black-cat,blood,bloodcurdling,bogeyman,bone,boo,broomstick,cackle,cadaver,candy,cape,carve,casket,cat,cauldron,cemetery,chilling,cloak,clown,cobweb,coffin,corpse,costume,creepy,crown,crypt,dark,darkness,dead,demon,devil,devilish,disguise,dreadful,death,dress-up,eerie,elf,enchant,evil,eyeballs,eyepatch,face paint,fairy,fangs,fantasy,fear,flashlight,fog,fright,frighten,frightening,frightful,genie,ghastly,ghost,ghoul,goblin,goodies,gory,gravestone,grim reaper,grisly,gruesome,hair-raising,halloween,hat,haunt,haunted house,hayride,headstone,hobgoblin,hocus pocus,horrible,horrify,howl,imp,lantern,macabre,make-believe,magic,mask,masquerade,mausoleum,midnight,mist,monster,moon,morbid,mummy,mysterious,night,nightmare,october,ogre,orange,otherworldly,owl,party,petrify,phantasm,phantom,pitchfork,poltergeist,potion,prank,pretend,pumpkin,repulsive,revolting,rip,robe scare,scarecrow,scream,shadow,shock,skeleton,skull,specter,spell,spider-web,spine-chilling,spirit,spooky,startling,strange,supernatural,superstition,sweets,tarantula,terrible,terrify,thrilling,tiara,toga,tomb,treat,trick,trick-or-treat,troll,unearthly,unnerving,vampire,vanish,wand,warlock,web,weird,werewolf,wicked,wig,witch,witchcraft,wizard,wraith,zombie";
var alphabet = "abcdefghijklmnopqrstuvwxyz";

//Splits word banks into new arrays
var wordArray = wordBank.split(",");
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

// --------------------------------------------------------------------------------------------
//Key Up interactions
document.onkeyup = function(event) {
    userGuess = event.key
    userGuess1 = event.keyCode
    console.log(userGuess, userGuess1);
    userWord = document.getElementById("userguess");
    compWord = document.getElementById("compword");
    shadow = keyShadow(userGuess, alphaArray)
    correctGuess = keyShadow(userGuess, choiceArr)



    if (gameOver) {
        //User presses 'space' to start the game.
        if (userGuess1 === 32) {
            gameStart();
            gameOver = false;

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
