/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/
//day 2

// binding methods// 
function reverseString(text) {
   return [...text].reverse().join('');
}


//es6 binding methods//
//use spread operator to create an array 
// function reverseString(text) {
//     return [...text].reverse('').join('');
// }

//for loop 
// function reverseString(text) {
//     let result = ""
//     for (let i = text.length - 1; i >= 0; i--) {
//         console.log(text[i])
//         result += text[i]
        
//     }
//     return result
// }

console.log(reverseString('uoiea'))

//callback / recursive way
//  function reverseString(text) {
//     return text === '' ? '' : reverseString(text.substr(1)) + text[0]
// }


//using reduce
// function reverseString(text){
//     return text.split('').reduce((acc, itm) => {
//         console.log(acc)
//         return itm + acc 
//     }
//         ,'')
// }


module.exports = reverseString