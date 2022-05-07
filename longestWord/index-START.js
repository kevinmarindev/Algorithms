/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/



function longestWord(text) {
    let arr = text.split(' ')
    let arrOne = text.split(' ').map(word => word.length)
    // console.log(arr, arrOne)
    let max = Math.max(...arrOne)
    // console.log(max)
    let theword = arr.find(item => item.length == max)
    return theword
    // arrOne.forEach((word, idx) => word.length > longest ? longest = word.length,  theIdx = idx : '' )
}

console.log(longestWord('BUILDING FOR THE NEXT BILLION USERS'))

module.exports = longestWord