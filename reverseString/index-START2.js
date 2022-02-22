/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/
//day 5


//bind methods
function reverseString(words){
   return words.split('').reverse().join('')
}




//es6 binding methods//
//use spread operator to create an array 
// function reverseString(text) {
//    return [...text].reverse().join('')
// }
   
//for loop 
function reverseString(text){
    let str = ''
    for (let i = text.length - 1; i >= 0; i--) {
        str += text[i]
    }
    return str
}



// callback / recursive way
//  function reverseString(text) {
//   return text === '' ? '' : reverseString(text.substring(1)) + text[0], console.log(text)
//  }
 function reverseString(text) {
  return text === '' ? '' : reverseString(text.substring(1)) + text[0]
 }
 //the function with the word car 
 // f(car)
 //1st run: f(ar) + c
 //2nd: f(r) + a
 //3rd f() + r
 //4: f() + ''
 //the callstack is responsible for returning the word rac the reverse or car once it gets 
                                                                

 //revisted the callstack
//using reduce       
// function reverseString(text){
//  return [...text].reduce((acc, item) => item + acc, '')
// }           
                                                                                                                                

module.exports = reverseString