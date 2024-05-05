//14. Write a function called isPowerOfTwo that takes an integer num as input and returns true if num is a powerOfTwo, and false otherwise.

function isPowerOfTwo(num) {
    let result = false
    for (let i = 0; i < num; i++) {
        if (2**i === num) {
            result = true
        }        
    }
    return result
}

console.log(isPowerOfTwo(8))
console.log(isPowerOfTwo(7))
console.log(isPowerOfTwo(16))