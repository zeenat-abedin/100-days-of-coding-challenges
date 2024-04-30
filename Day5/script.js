// 5. Write a function to sort an array of numbers in ascending order without using built-in sort() method.

function sortAscending(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }      
    }
    return arr;
}


console.log(sortAscending([18, 2, 10, 50, 5]));