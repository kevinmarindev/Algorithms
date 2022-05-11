/*
Write a function that returns the factorial of 
the provided integer(n). E.g
    factorial(5) // should return 120
*/

function factorial(n){
    if(n == 1) return 1
    let result = n
    for (let i = n - 1; i > 0; i--) {
        console.log('yes')
        result *= i 
    }

    return result 
}

console.log(factorial(5))
module.exports = factorial