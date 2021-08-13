/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/
//day 3

const vowels = ['a', 'e', 'i', 'o', 'u']
// function vowelsCounter(text) {
//     let counter = 0;
//     for (const letter of text.toLowerCase()) {
//         if(vowels.includes(letter)) counter++
//     }
//     return counter;
// }

function vowelsCounter(text){
    let matches = text.match(/[aeiou]/gi);
    if(matches) return matches.length;
    else return 0;
}


module.exports = vowelsCounter;
