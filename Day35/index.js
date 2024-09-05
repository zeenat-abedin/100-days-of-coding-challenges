//Check object emptiness

const isEmptyObject = (obj) => {
    return obj.length === 0 ? `it's empty`: `it's not empty`
}

console.log(isEmptyObject({ name: 'vinod' }))
console.log(isEmptyObject({ }))