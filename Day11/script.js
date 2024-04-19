// 11. Write a function that takes a number as input and returns the sum of its digit.

function sumOfDigits(num) {    
    let arr = Array.from(String(num), Number)
    
    return arr.reduce((acc, currElem) => acc += currElem, 0)
}

console.log(sumOfDigits(1234))
console.log(sumOfDigits(4321))
console.log(sumOfDigits(123456))