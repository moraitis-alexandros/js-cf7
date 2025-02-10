const cities = ["Paris", "London", "Berlin", "Athens"]
const numbers = [10, 101, 103, 99, 990, 600]


console.log(cities.sort())
console.log(numbers.sort())

// numbers.sort(function(a,b){
// if (a > b) return 1
// if (a < b) return -1
// if (a === 0) return 0
// })

//ισοδύναμο
//ascending
numbers.sort(function(a, b) {
    return a - b
})

//descending
numbers.sort(function(a, b) {
    return b - a
})


console.log(numbers)
console.log(numbers.reverse)
