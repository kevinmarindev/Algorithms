// function vowelCounter(str){
//     return str.match(/[aeiou]/gi).length
// }

let vowels = ['a', 'e', 'i', 'o', 'u']

function vowelCounter(str){
    let counter = 0
    for (const char of str) {
        if(vowels.includes(char.toLowerCase())) counter++
    }
    return counter
}

console.log(vowelCounter('aeiourrr'))