// 20. Reverse a string without using any built-in methods

function reverseString(str) {
    let newString = "";

    for (let i = str.length - 1; i >= 0; i--) {
    newString = newString + str[i]
    }
    return newString;
}

console.log(reverseString('hello'))