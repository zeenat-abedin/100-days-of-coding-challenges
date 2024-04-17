// Write a function that takes an array of integers as input and removes any duplicate elements, returning a new arraywith only the unique elements.

function removeDuplicates(arr) {
    let newArr = [...new Set(arr)]
    console.log(newArr) 
    return newArr
}

console.log(removeDuplicates([1,2,3,2,1,4]))
console.log(removeDuplicates([5,6,7,7,8,8,9]))
console.log(removeDuplicates([1, 2, 3, 4]))
console.log(removeDuplicates([]))

//The new Set method in Javascript creates a new Set object. A set object is a collection of unique values. It can store any type of value, whether primitive values or object references.
//The spread operator (...) creates a new array with the unique elements of the original array.