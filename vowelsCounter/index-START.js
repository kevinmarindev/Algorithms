/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/
//day 5

const vowels = ['a', 'e', 'i', 'o', 'u']
// for of method
function vowelsCounter(text) {
    let counter = 0;
    for (const letter of text.toLowerCase()) {
        if(vowels.includes(letter)) counter++
    }
    return counter;
}
//creating an array with match method
function vowelsCounter(text){
    let matches = text.match(/[aeiou]/gi);
    if(matches) return matches.length;
    else return 0
}
//looked over this algo again 

module.exports = vowelsCounter;
