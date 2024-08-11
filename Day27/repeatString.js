// Write a function called repeatString that takes in 2 parameters

function repeatString(str, num) {
    return num > 0 ? str.repeat(num) : ''
}


console.log(repeatString('abc', 5)) // Output-> 'abcabcabcabcabc'