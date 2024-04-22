// 9. Write a function called calculateAverage that takes an array of numbers and returns the average of those numbers.

function calculateAverage(arr) {
    let total = arr.reduce((acc, curr) => acc + curr, 0)
    return total / arr.length
}

console.log(calculateAverage([1, 2, 3, 4, 5]))
console.log(calculateAverage([7,8,4,5]))