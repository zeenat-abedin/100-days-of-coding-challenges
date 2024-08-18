// Write a function called numberRange that generates an array containing consecutive numbers from a to b (inclusive).

const numberRange = (a,b) => {
    let arr = [];
    for (let i = a; i <= b; i++) {
        arr.push(i);
    }
    return arr;
}

console.log(numberRange(0,5)) // Output -> [1, 2, 3, 4,  5]
console.log(numberRange(3,7))
console.log(numberRange(-2,2))