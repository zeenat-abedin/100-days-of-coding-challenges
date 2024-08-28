// remove duplicates from an array

function removeDuplicatesFromAnArray(arr) {
    return  [...new Set(arr)];
}


console.log(removeDuplicatesFromAnArray([1,2,2,3,4,5,5,6]))