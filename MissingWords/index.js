function Missing(str1, str2){
    let arr1 = str1.split(' ')
    let arr2 = str2.split(' ')
    let final = []
    let arr3 = str2.split(' ')
    console.log(arr1, arr2)

    let thelength = arr1.length 

    for (let i = 0; i < thelength; i++) {
        if(!arr2.includes(arr1[i])) final.push(arr1[i])
        else if (arr2.includes(arr1[i]) && (arr1.indexOf(arr1[i]) != i)) final.push(arr1[i])
        

   
}
 return final 
}
 module.exports = Missing


console.log(Missing("Python is an easy to learn powerful programming language It has efficient high-level data structures and a simple but effective approach to objectoriented programming Python elegant syntax and dynamic typing", "Python is an easy to learn powerful programming language"))
console.log(Missing("I love it", "I it"))

