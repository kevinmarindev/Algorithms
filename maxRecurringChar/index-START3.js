/* CHALLENGE
Given a string of text, find and return the most recurring character. 
e.g maxRecurringChar('aabacada') // will return 'a'
*/



// function maxRecurringChar(text) {
//     let charmap = {};
//     let maxCharVal = 0
//     let maxChar = ''

//     for (let char of text) {
//         if(charmap.hasOwnProperty(char)){
//             charmap[char]++
//         }else{
//             charmap[char] = 1
//         }
//     }

//     for (let char in charmap) {
//         if(charmap[char] > maxCharVal){
//           maxCharVal = charmap[char]
//           maxChar = char
//         }
//     }
//  return maxChar
// }

function maxRecurringChar(str){
    let objToHoldChars = {}
    let charVal = 0
    let theChar = ''
    for (const char of str) {
        if(objToHoldChars[char]) objToHoldChars[char]++
        else objToHoldChars[char] = 1
    }
    for (const char in objToHoldChars) {
        if(objToHoldChars[char] > charVal) charVal = objToHoldChars[char], theChar = char;
    }
    return theChar
}

module.exports = maxRecurringChar;