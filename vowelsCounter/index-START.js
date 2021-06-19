/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/

// const vowels = ['a', 'e', 'i', 'o', 'u']
// function vowelsCounter(text) {
//     const vowels = ['a', 'e', 'i', 'o', 'u']
//     let counter = 0;
//     let text2 = text.toLowerCase()
//     for (let letter of text2) {
//         if(vowels.includes(letter)){
//             counter++
//         }
//     }
//     return counter
// }

function vowelsCounter(text){
    let matching = text.match(/[aeiou]/gi)
    if(matching) return matching.length
    else return 0
}


module.exports = vowelsCounter;
