//first soiltuion is to spit into an array reverser then join again

// function rvrsStr(str){
//     return str.split('').reverse().join('')
// }

// function rvrsStr(str){
//     return [...str].reverse().join('')
// }


// function rvrsStr(str){
//     let rstr = ''
//     for (let i = str.length - 1; i >= 0; i--) {

//        rstr += str[i]
//     }
//     return rstr
// }


//use callbacks

function rvrsStr(str){
    if(str.length == 0) return ''
    else return rvrsStr(str.slice(1)) + str[0]
}
console.log(rvrsStr('kevin'))