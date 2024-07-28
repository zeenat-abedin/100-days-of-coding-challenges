// Write the factorial of a number using recursion

//Recursion is a programming technique where a function keeps calling itself until it reaches a base case.

function factorial(num) {
    if (num === 1) {
       return 1 
    } else {
       return num * factorial(num -1)
    }
}

console.log(factorial(5))
console.log(factorial(5))
console.log(factorial(5))