/*
    Write a program that prints the numbers from 1 to n. But for 
    multiples of three print “Fizz” instead of the number and for 
    the multiples of five print “Buzz”. For numbers which are 
    multiples of both three and five print “FizzBuzz”.
*/



function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        i % 3 == 0 && i % 5 == 0 ? console.log('fizzbuzz') : i % 3 == 0 ? console.log("fizz") : i % 5 == 0 ? console.log('buzz') : console.log(i) 
    }
    // return n + 'cat'
}

console.log(fizzBuzz(30))


module.exports = fizzBuzz