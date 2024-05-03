// 1. Calculate mean of the array
// 3. Calculate mode of the arrays

function calculateMean(arr) {
    if (arr.length === 0) return 0
    let sum = arr.reduce((acc, curr) => acc + curr, 0)
    return sum / arr.length
}

console.log(calculateMean([1,2,3,4,5]))
console.log(calculateMean([10,20,30]))
console.log(calculateMean([-1,0,1]))
console.log(calculateMean([])) //empty array should return 0