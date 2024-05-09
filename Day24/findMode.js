//24. Write a function called findMode that takes an array of numbers as input and returns the mode of the array (the numbers that appears most frequently)


function findMode(arr) {
    let counts = {}
    let maxNum = 0
    let mode;

    for (let element of arr) {
    counts[element] = (counts[element] || 0) + 1
        if (counts[element] > maxNum) {  
            maxNum = counts[element]  
            mode = maxNum
      }
   }
    return mode   
}

console.log(findMode([1, 2, 2, 3, 4, 2])) //Output: 2

//Note: The mode is the most common number that appears in your set of data. To find the mode count how often each number appears and the number that appears the most times is the mode.