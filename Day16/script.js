//Find the minimum value in an array.

function findMin(arr) {
    arr = arr.sort((a, b) => a-b) //sorting in ascending order
    return arr[0]
}

console.log(findMin([5, 4, 2, 7, 8]))
console.log(findMin([5, -3, 0, 12, 8, -7]))
console.log(findMin([]))

