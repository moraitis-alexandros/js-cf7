const person = {
    firstname: "Alice",
    age: 25,
    city: "Athens",
    isStudent: false
}


const keys = Object.keys(person)
keys.forEach(key => console.log(`key: ${key}, value: ${person[key]}`))

const grades = {
    maths: 8,
    science: 10,
    history: 5
}

const total = Object.values(grades).reduce((sum, el) => sum + el, 0)
console.log(total)

let avg = (total / 3).toFixed(2)
console.log(avg)

