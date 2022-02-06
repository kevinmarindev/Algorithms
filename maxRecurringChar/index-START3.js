/* CHALLENGE
Given a string of text, find and return the most recurring character. 
e.g maxRecurringChar('aabacada') // will return 'a'
*/



function maxRecurringChar(text) {
    let obj = {}
    maxchar = ''
    count = 0;
    for (const char of text) {
        if(obj[char]) obj[char]++
        else obj[char] = 1
    }
    for (const char in obj) {
        if(obj[char] > count) count = obj[char], maxchar = char
    }
    return maxchar
}

function maxRecurringChar(str){
    let obj = {}
    let charArr, valueArray = []
    maxchar = 0;
    for (const char of str) {
        if(obj[char]) obj[char]++
        else obj[char] = 1
    }
    //mapping done obj cretaed with chars as keys and number of times as values
    charArr = Object.keys(obj)
    valueArray = Object.values(obj)
    maxchar = Math.max(...valueArray)
    return charArr[valueArray.indexOf(maxchar)]
}

module.exports = maxRecurringChar;