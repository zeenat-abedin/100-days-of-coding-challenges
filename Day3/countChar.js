// 3. Write a function called countChar that takes two parameters: a string and a character to count. The function should return the number of times the specified character appears in the string.


function countChar(word, char){
    word = word.toLowerCase()
    char = char.toLowerCase()

    totalCount = word.split("").reduce((acc, currChar) => {
        if(currChar === char){
            acc++
        }
        return acc
    }, 0)
    return totalCount
}

console.log(countChar("MissIssIppi", "I"))