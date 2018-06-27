

//Global Variables

compArray = [];
userArray = [];

var alphabet = "abcdefghijklmnopqrstuvwxyz"

//Word Bank Object - 169 words
var wordBank = "afraid, afterlife, alarming, alien, angel, apparition, astronaut, autumn, ballerina, bat, beast, bizarre, black, black cat, blood, bloodcurdling, bogeyman, bone, boo, broomstick, cackle, cadaver, candy, cape, carve, casket, cat, cauldron, cemetery, chilling, cloak, clown, cobweb, coffin, corpse, costume, creepy, crown, crypt, dark, darkness, dead, demon, devil, devilish, disguise, dreadful, death, dress-up, eerie, elf, enchant, evil, eyeballs, eyepatch, face paint, fairy, fangs, fantasy, fear, flashlight, fog, fright, frighten, frightening, frightful, genie, ghastly, ghost, ghoul, goblin, goodies, gory, gravestone, grim reaper, grisly, gruesome, hair-raising, halloween, hat, haunt, haunted house, hayride, headstone, hobgoblin, hocus pocus, horrible, horrify, howl, imp, lantern, macabre, make-believe, magic, mask, masquerade, mausoleum, midnight, mist, monster, moon, morbid, mummy, mysterious, night, nightmare, october, ogre, orange, otherworldly, owl, party, petrify, phantasm, phantom, pitchfork, poltergeist, potion, prank, pretend, pumpkin, repulsive, revolting, rip, robe scare, scarecrow, scream, shadow, shock, skeleton, skull, specter, spell, spider web, spine-chilling, spirit, spooky, startling, strange, supernatural, superstition, sweets, tarantula,terrible,terrify,thrilling,tiara,toga,tomb,treat,trick,trick-or-treat,troll,unearthly,unnerving,vampire,vanish,wand,warlock,web,weird,werewolf,wicked,wig,witch,witchcraft,wizard,wraith,zombie"

//Splits wordBank into an array separated by commas
var wordArray = wordBank.split(",")
//Splits alphabet into an array, separated by white-space
var userArray = alphabet.split("")

//Function that will choose a random word from wordArray
function compChoice () {
    return wordArray[Math.floor(Math.random() * wordArray.length)]
};


// test space
function test () {
    keys = Object.keys(wordBank) // Finds all the keys in object
    rand = keys[Math.floor(Math.random() * keys.length)] // Picks a random key from object
    banana = Object.getOwnPropertyNames(rand).sort() // Hopefully will list properties of object
    return banana
}


// --------------------------------------------------------------------------------------------
//Key Up interactions
document.onkeyup = function(event) {
    userGuess = event.key
    console.log(userGuess);

};
