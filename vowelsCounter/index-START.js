/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/
//day 5

const vowels = ['a', 'e', 'i', 'o', 'u']
//use For loop method


// function vowelsCounters(word){
//     let count = 0
//     for (let i = 0; i < word.length; i++) {
//         if (vowels.includes(word[i])) count++
        
//     }
//     return count
// }

//Use for of method
// function vowelsCounters (word) {
//     let count = 0;
//     for (const char of word.toLowerCase()) {
//         if(vowels.includes(char)) counter++
//     }
//     return count 
// }


//use regex

function vowelsCounters(theWord){
    let regex = /[aeiou]/gi
    let count = theWord.match(regex)
    console.log(count)
    return count ? count.length : 0
}

module.exports = vowelsCounters;
