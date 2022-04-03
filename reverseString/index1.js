//first soiltuion is to spit into an array reverser then join again

// function rvrsStr(str){
//     return str.split('').reverse().join('')
// }

function rvrsStr(str){
    return [...str].reverse().join('')
}

console.log(rvrsStr('kevin'))