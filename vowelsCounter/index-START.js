/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/
//day 5

const vowels = ['a', 'e', 'i', 'o', 'u']
//use For of method


function vowelsCounters(word){
    let count = 0
    for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word[i])) count++
        
    }
    return count
}


function vowelsCounters(text){
    let amount = 0;
    for (const char of text) {
        vowels.includes(char.toLowerCase()) ? amount++ : ''
    }
    return amount
}

// function vowelsCounters(text){
//     let regEx = /[aeiou]/ig
//     let array = text.match(regEx)
//     return array ? array.length : 0
// }

function vowelsCounters(text){
    let reggex = /[aeiou]/ig
    let array = text.match(reggex)
    return array ? array.length : 0 
}
//looked over this algo again 

module.exports = vowelsCounters;
