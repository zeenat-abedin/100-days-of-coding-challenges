const obj = {
   name: "Zeenat",
   age: 27,
   occupation: "Software Engineer",
   city: "Bengaluru"
}

// convert the object to an array of key value pairs

let entries = Object.entries(obj)
console.log(entries)
console.log(entries.flat())

// convert the array of key value pairs back to an object

let newObj = Object.fromEntries(entries)
console.log(newObj)