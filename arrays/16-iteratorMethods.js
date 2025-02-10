const students = ['Alice', 'Andreas', 'Bob', 'Costas', 'Andreas']

// students.forEach(function(stu, index, arr){
//     console.log(stu, index, arr)
// })

//ή παρόμοιο χωρίς δυνατότητα να εκτυπώση index & array
students.forEach(student => console.log(student))

let filtered = students.filter(str => str === 'Andreas')
console.log(filtered)

let mapped = students.map(student => "Student: " + student)
console.log(mapped)

const number = [1, 3, 9, 12]
let sum = number.reduce((total, val) => total + val, 0)
console.log(sum) 