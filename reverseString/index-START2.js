/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/
//day 5

// binding methods// 
function reverseString(text){
    text.split('').reverse().join('')
}


//es6 binding methods//
//use spread operator to create an array 
// function reverseString(text) {
//    return [...text].reverse().join('')
// }
   
//for loop 
function reverseString(text) {
  let result = '';
  for (let i = text.length; i >= 0; i--) {
      result += text[i]
      
  }
  return result 
}



// // callback / recursive way
 function reverseString(text) {
  return text === '' ? '' : reverseString(text.substring(1)) + text[0]
 }
                                                                

 //revisted the callstack
//using reduce       
// function reverseString(text){
//  return [...text].reduce((acc, item) => item + acc, '')
// }           
                                                                                                                                

module.exports = reverseString