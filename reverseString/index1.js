//first soiltuion is to spit into an array reverser then join again

// function rvrsStr(str){
//     return str.split('').reverse().join('')
// }

// function rvrsStr(str){
//     return [...str].reverse().join('')
// }


function rvrsStr(str){
    let rstr = ''
    for (let i = str.length - 1; i >= 0; i--) {
        // console.log(str[i])
       rstr += str[i]
    }
    return rstr
}
console.log(rvrsStr('kevin'))