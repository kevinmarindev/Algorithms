/*
Write a function to return the nth element in Fibonacci sequence,
where the sequence is:
    [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …]
*/


function fibonacci(n) {
    let arr = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]
    if(n <= 11) return arr[n]
    
    for (let i = arr.length - 1; i < n; i++) {
        arr.push(arr[i] + arr[i - 1])
    }
    return arr[arr.length - 1] 
}
console.log(fibonacci(20))
module.exports = fibonacci