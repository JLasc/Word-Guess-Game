

//Global Variables

//Variables
var i;
var gamestart = false;

//Empty Arrays comp choice and user guesses
compArray = [];
userArray = [];
var wordSplit;

//Alphabet bank for user guesses
var alphabet = "abcdefghijklmnopqrstuvwxyz"

//Word Bank Object - 169 words
var wordBank = "afraid,afterlife,alarming,alien,angel,apparition,astronaut,autumn,ballerina,bat,beast,bizarre,black,black-cat,blood,bloodcurdling,bogeyman,bone,boo,broomstick,cackle,cadaver,candy,cape,carve,casket,cat,cauldron,cemetery,chilling,cloak,clown,cobweb,coffin,corpse,costume,creepy,crown,crypt,dark,darknessm,dead,demon,devil,devilish,disguise,dreadful,death,dress-up,eerie,elf,enchant,evil,eyeballs,eyepatch,face paint,fairy,fangs,fantasy,fear,flashlight,fog,fright,frighten,frightening,frightful,genie,ghastly,ghost,ghoul,goblin,goodies,gory,gravestone,grim reaper,grisly,gruesome,hair-raising,halloween,hat,haunt,haunted house,hayride,headstone,hobgoblin,hocus pocus,horrible,horrify,howl,imp,lantern,macabre,make-believe,magic,mask,masquerade,mausoleum,midnight,mist,monster,moon,morbid,mummy,mysterious,night,nightmare,october,ogre,orange,otherworldly,owl,party,petrify,phantasm,phantom,pitchfork,poltergeist,potion,prank,pretend,pumpkin,repulsive,revolting,rip,robe scare,scarecrow,scream,shadow,shock,skeleton,skull,specter,spell,spider-web,spine-chilling,spirit,spooky,startling,strange,supernatural,superstition,sweets,tarantula,terrible,terrify,thrilling,tiara,toga,tomb,treat,trick,trick-or-treat,troll,unearthly,unnerving,vampire,vanish,wand,warlock,web,weird,werewolf,wicked,wig,witch,witchcraft,wizard,wraith,zombie"

//Splits wordBank into an array separated by commas
var wordArray = wordBank.split(",")
var wordChoice = wordFunction();
var finalWord = wordChoice

//Clears compArray, chooses new word, and then adds it to compArray as a new index.
function wordFunction () {
    compArray=[]
    a = wordArray[Math.floor(Math.random() * wordArray.length)]
    compArray.push(a)
    console.log(compArray)
    b = compArray.join()
    c = b.split("")
    return wordSplit = c
}

//Takes word stored into compArray, and turns each letter into array items.
/* function wordFoo () {
    a = compArray.join()
    b = a.split("")
    return wordSplit = b
}
 */
//Splits alphabet into an array, separated by white-space
var alphaArray = alphabet.split("")

//Function that will choose a random word from wordArray
function compChoice () {
    compArray = [];
    a = wordArray[Math.floor(Math.random() * wordArray.length)];
    return compArray.push(a)
};


//Loop that turns wordSplit into underscores.
for (i=0; i < wordSplit.length; i++) {
    console.log("-")}






// --------------------------------------------------------------------------------------------
//Key Up interactions
document.onkeyup = function(event) {
    userGuess = event.key
    console.log(userGuess);

};
