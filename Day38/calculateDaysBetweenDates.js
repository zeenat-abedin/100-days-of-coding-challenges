// Dates willl be provided in the format "YYYY-MM-DD"

const calculateDaysBetweenDates = (d1, d2) => {
    let currDate = new Date()
    console.log(currDate.toLocaleDateString())
}

console.log(calculateDaysBetweenDates("2024-01-01", "2024-01-2031")) //Output -> 30