/*
 Given two or more arrays, write a function that combines
 their elements into one array without any repetition. 
 E.g mergeArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5]
*/

//The spread operator in this case is used to create an array that will merge all the arrays into one array. 
function mergeArrays(...arr){
   console.log(arr)
    const set = new Set()
    arr.forEach(arr => arr.forEach(item => set.add(item)))
    console.log(set)
    let finalArr = [...set]
    return finalArr
}

// mergeArrays([1,2,3], [1,2,5], [5,9,0], [25, 32, 3])
module.exports = mergeArrays