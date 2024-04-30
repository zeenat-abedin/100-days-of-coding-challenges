// 2. Implement a function generateHash that accepts a string and returns a hash of the string.

//The input string should be converted to a hashtag format, where each word is capitalized and concatened together without spaces.

//If the length of the input string is greater than 280 characters or if the input string is empty or contains only whitespace, the function should return false.

//Otherwise the function should return the generated hashtag prefixed with #

function generateHash(str) {
    if (str.length > 280 || str.trim().length === 0) return false
    
    str = str.split(" ")
    str = str.map((currElem) => currElem.replace(currElem[0], currElem[0].toUpperCase())
    ) 
    return "#" + str.join("")
}

console.log(generateHash("my name is zeenat abedin"))

