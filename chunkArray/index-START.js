

function chunkArray(array, size) {
    let arrOne = [...array]
    let finalArr = []
    let i = 0
    while( i < (array.length / size)){
        finalArr.push(arrOne.splice(0, size))
        i++
    }
    return finalArr
}

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 5))
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2))

module.exports = chunkArray