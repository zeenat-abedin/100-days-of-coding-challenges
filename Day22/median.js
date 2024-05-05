// 22. Calculate median of the array

// Sort the array in ascending order
// If the array has an odd number of elements, the median is the middle element.
// If the array has an even number of elements, the median is the average of the two middle elements.


function findMedian(arr) {
    //Step 1: Sort the array in ascending order
    console.log(arr.sort((a, b) => a - b))
    
    //Step 2: Check if the array length is odd or even.
    let length = arr.length
    let mid = Math.floor(length / 2)
    console.log(mid)

    //Step 3: for even length array
    if (length % 2 === 0) {
        let median = (arr[mid] + arr[mid - 1]) / 2
        return median
    } else {
    //Step 4: for odd length array
        return arr[mid]
    }
}

console.log(findMedian([5,3,9,1,7]))
console.log(findMedian([2,4,6,8]))
console.log(findMedian([1,3,5,7,9,11]))
