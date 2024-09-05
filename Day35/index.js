//Check object emptiness

const isEmptyObject = (obj) => {
   return Object.keys(obj).length === 0
}

console.log(isEmptyObject({ name: 'vinod' }))
console.log(isEmptyObject({ }))