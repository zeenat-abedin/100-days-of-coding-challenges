// fibonacci using recursion

//The fibonacci series is a sequence of numbers in which each number (fibonacci number) is the sum of two preceding numbers

function fibonacci(num) {
   if (num <= 1) {
     return num
    } else {
       return fibonacci(num - 1) + fibonacci(num - 2)
    }      
}

console.log(fibonacci(2))
console.log(fibonacci(3))
console.log(fibonacci(5))
console.log(fibonacci(7))