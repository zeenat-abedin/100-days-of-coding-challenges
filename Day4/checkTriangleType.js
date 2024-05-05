// 4. Write a function called checkTriangleType that takes 3 parameters representing the sides of the triangle and returns the type of triangle it is.

function checkTriangleType(a, b, c) {
    if (a === b && b === c) {
        return "Equilateral"
    } else if (a === b || b === c || a === c) {
        return "Isosceles"
    } else if (a !== b && b !== c && a !== c) {
        return "Scalene"
    } else {
        return "Not a triangle"
    }  
}

console.log(checkTriangleType(3,3,3))
console.log(checkTriangleType(3,4,3))
console.log(checkTriangleType(5,8,6))