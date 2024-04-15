//15 Write a function to calculate the sum of squares of all elements in an array.

// Input: [0,1,2,3,4]
// Output: 30

function sumOfSquares(arr) {
    return arr.reduce((acc, curr) => (acc = acc + curr * curr), 0)
}

console.log(sumOfSquares([0, 1, 2, 3, 4]))

function sumOfSqs(arr) {
    let sum = 0
    for (const iterator of arr) {
        sum = sum + iterator * iterator
    }
    return sum
}

console.log(sumOfSqs([0, 1, 2, 3, 4]))
