//Write a function to convert a string to camelCase & snake_case.

const toCamelCase = (str) => {
    str = str.trim().split(' ')

    str = str.map((currElem, index) => {
        if (index === 0) {
            return currElem.toLowerCase()
        } else {
            return currElem.charAt(0).toUpperCase() + currElem.slice(1).toLowerCase()
        }
    })
    
    return str.join("")
}

console.log(toCamelCase('hello world zeeNat'))
