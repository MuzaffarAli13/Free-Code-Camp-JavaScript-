// Word blanks
function WordBlanks(myNoun,myAdjective,myVerb,myAdverb){
    var result = "";
    result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb;
    return result  
}

console.log(WordBlanks("dog","big","ran","quickly"));
console.log(WordBlanks("bike","slow","flew","slowly"));