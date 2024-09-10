// Dates willl be provided in the format "YYYY-MM-DD"

const calculateDaysBetweenDates = (d1, d2) => {
    let date1 = new Date(d1)
    let date2 = new Date(d2)

    let diff = Math.abs(date2 - date1)
    return diff / (1000 * 60 * 60 * 24)
}

console.log(calculateDaysBetweenDates("2024-01-05", "2024-01-31")) //Output -> 26