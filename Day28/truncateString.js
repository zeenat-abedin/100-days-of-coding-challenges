// Write a function that takes two parameters: a str and an integer representing the max length.

function truncateString(str, count) {
    // Check if the count is less than zero
    if (count < 0) {
        return str
    } else if (str.length > count) {
        return str.slice(0, count).concat('...')
    }
}

const truncatedString = (str, count) => {
    return count < 0 ? str : str.slice(0, count).concat('...')
}

console.log(truncateString('A-tisket a-tasket a green and a red flag', 8)) //Output -> A-tisket...

console.log(truncatedString('A-tisket a-tasket a green and a red flag', 8)) 