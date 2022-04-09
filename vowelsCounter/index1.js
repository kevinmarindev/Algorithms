function vowelCounter(str){
    return str.match(/[aeiou]/gi).length
}
console.log(vowelCounter('aeiourrr'))