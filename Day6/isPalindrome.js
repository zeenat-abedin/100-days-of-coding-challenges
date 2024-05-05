// 6. Write a function to determine whether a given string is palindrome or not. A palindrome is a word, number, phrase, or other sequence of characters which reads the same backward as forward, such as madam or kayak.

function isPalindrome(str) {
    let strArr = str.toLowerCase().replace(/\W/g,"")
    let reversedStr = strArr.split('').reverse().join('')
    return strArr === reversedStr ? true : false
}

console.log(isPalindrome('A man, a plan, a canal, Panama'))
console.log(isPalindrome('hello'))
console.log(isPalindrome('racecar'))

// /\\W/g matches all non-word characters in the string and replaces them with an empty string (""), effectively removing them from the string.