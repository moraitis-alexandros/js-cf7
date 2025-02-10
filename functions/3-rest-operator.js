function max(...numbers) {
    let maxVal = -Infinity

    for (let n of numbers) {
        if (n > maxVal) {
            maxVal = n
        }
    }
    return maxVal
}

console.log(max(1,6,3,10))


function sum (...numbers) {
    return numbers.reduce((total, num) => total + num, 0)
}

console.log(sum(1,2,6,29))

function greet(message, ...names) {
    console.log(message + ", " + names.join(", "))
}

greet("hello", "alice", "bob")