/* CHALLENGE
Given two strings of equal length, calculate and return the the hamming distance.
E.g hammingDistance('rover', 'river') // should return 1
*/




function hammingDistance(stringA, stringB) {
    let diff = 0
    let a = stringA.split('')
    let b = stringB.split('')
    console.log(a,b)
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) diff++
    }
    return diff 
}

console.log(hammingDistance('kevin', "maria"))

module.exports = hammingDistance