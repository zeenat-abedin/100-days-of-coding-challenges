//Find the minimum value in an array.

function findMin(arr) {
    arr = arr.sort((a, b) => a-b) //sorting in ascending order
    return arr[0]
}

console.log(findMin([5, 4, 2, 7, 8]))
console.log(findMin([5, -3, 0, 12, 8, -7]))
console.log(findMin([]))

//another way for the above

function findMinimum(arr) {
    arr = arr.sort((a, b) => {
        if (b > a) return -1  //return -1 means swipe the value
    })
    return arr[0]
}

console.log(findMinimum([5, 4, 2, 7, 8]))
console.log(findMinimum([5, -3, 0, 12, 8, -7]))
console.log(findMinimum([]))

//another way for the above
function findMinOfArr(arr) { 
    if (arr.length === 0) return undefined
    return Math.min(...arr)
}
 
console.log(findMinOfArr([5, 4, 2, 7, 8]))
console.log(findMinOfArr([5, -3, 0, 12, 8, -7]))
console.log(findMinOfArr([]))