// Write a function called repeatString that takes in 2 parameters

function repeatString(str, num) {
    return num > 0 ? str.repeat(num) : str
}


console.log(repeatString('abc', 3)) // Output-> 'abcabcabcabcabc'