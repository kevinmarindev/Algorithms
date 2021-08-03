/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/


// binding methods// 
// function reverseString(text) {
//     return text.split('').reverse().join('')
// }

//es6 binding methods//
// function reverseString(text) {
//     return [...text].reverse().join('')
// }

//for loop 
// function reverseString(text) {
//     let result = ""
//     for (let i = text.length - 1; i >= 0; i--) {
//         result += text[i]
//     }
//     return result
// }

//callback / recursive way
 function reverseString(text) {
    return text === '' ? '' : reverseString(text.substr(1)) + text[0]
}


//minor changes added 

changes///fffdfdfdff

//testting 


module.exports = reverseString