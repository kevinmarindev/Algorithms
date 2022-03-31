//the most reocurring character in a str.

//My first solution is to create an obj the keys are gonna be the vowels and the values are gonna be the count. Return the key with the largest value.

function countTheChars(str){
    let obj = {}
    let mostCommonChar = 0
    let theChar 

    for (let i = 0; i < str.length; i++) {
        obj.hasOwnProperty(str[i]) ? obj[str[i]]++ : obj[str[i]] = 1 
    }
    console.log(obj)
    for (const char in obj) {
        console.log(obj[char], mostCommonChar, char)
       if(obj[char] > mostCommonChar) mostCommonChar = obj[char], theChar = char
        // if(char > mostCommonChar) console.log('yeah')
    }
    return theChar

    
    
}
//or use arrays 

module.exports = countTheChars

// console.log(countTheChars('kevinnreee'))