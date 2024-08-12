// Write a function that takes two parameters: a str and an integer representing the max length.

function truncateString(str, count) {
    if (str.length > count) {
        return str.slice(0, count)
    }
}

console.log(truncateString('A-tisket a-tasket a green and a red flag', 8)) //Output -> A-tisket...