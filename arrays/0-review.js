const cities = ['Athens', "Paris", "Toronto"]

//Add - Modifies the array
cities.push("London")

let city = cities[0]
console.log(city)

cities[1] = "London"

cities.forEach(c => console.log(c))

cities.sort()

cities.sort((a, b) => a.localeCompare(b, "en"))

// Shallow copy
const citiesSorted = cities.slice(0).sort((a, b) => a.localeCompare(b, "en"))

//Deep Copy
const citiesCopy1 = JSON.parse(JSON.stringify(cities))

const cities2 = structuredClone(cities)

//Shallo copies -- Spread operator
const cities3 = [...cities]
const nums = [1, 2, 3, 4]
let maxVal = Math.max(...nums)
let maxIndex = nums.indexOf(maxVal)
console.log(`Max value ${maxVal}, Max Index: {maxIndex}`)
