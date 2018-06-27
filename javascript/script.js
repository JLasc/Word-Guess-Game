

//Global Variables

var wordBank = {
    alphabet: "abcdefghijklmnopqrstuvwxyz",
    a: "afraid, afterlife, alarming, alien, angel, apparition, astronaut, autumn",
    b: "ballerina, bat, beast, bizarre, black, black-cat, blood, bogeyman, bone, boo, broomstick",
    c: "cackle,cadaver,candy,cape,carve,casket,cat,cauldron,cemetery,chilling,cloak,clown,cobweb,coffin,corpse,costume,creepy,crown,crypt",
    d: "dark,darkness,dead,demon,devil,devilish,disguise,dreadful,death,dress-up",
    e: "eerie,elf,enchant,evil,eyeballs,eyepatch",
    f: "face paint, fairy, fangs, fantasy, fear, flashlight, fog, fright, frighten, frightening, frightful",
    g: "genie, ghastly, ghost, ghoul, goblin, goodies, gory, gravestone, grim reaper, grisly, gruesome",
    h: "hair-raising, Halloween, hat, haunt, haunted house, hayride, headstone, hobgoblin, hocus pocus, horrible, horrify, howl",
    i: "imp",
    l: "lantern",
    m: "macabre,make-believe,magic,mask,masquerade,mausoleum,midnight,mist,monster,moon,morbid,mummy,mysterious",
    n: "night,nightmare",
    o: "october,ogre,orange,otherworldly,owl",
    p: "party,petrify,phantasm,phantom,pitchfork,poltergeist,potion,prank,pretend,pumpkin",
    r: "repulsive,revolting,rip,robe",
    s: "scare, scarecrow, scream, shadow, shock, skeleton, skull, specter, spell, spider web, spine-chilling, spirit, spooky, startling, strange, supernatural, superstition, sweets",
    t: "tarantula,terrible,terrify,thrilling,tiara,toga,tomb,treat,trick,trick-or-treat,troll",
    u: "unearthly,unnerving",
    v: "vampire,vanish",
    w: "wand,warlock,web,weird,werewolf,wicked,wig,witch,witchcraft,wizard,wraith",
    z: "zombie"
}





document.onkeyup = function(event) {
    userGuess = event.key
    console.log(userGuess);

};
