console.log(1) //true
console.log(0) //false
console.log("hello") //true
console.log("") //false
console.log(undefined) //false
console.log(null) //false
console.log({})   //true
console.log([]) //true

while (1) {
    console.log("Hello")
    break
}

do {
    console.log("Koukou")
} while (0)

    for (let i = 1; 1; i++) {
        console.log("In for")
        break
    }

    let num = 10
    while (num) {
        console.log(num)
        num--
    }

    // && || !

    console.log("Coding" && 7) //truthy && truthy -> last truthy value
    //truthy && falsy, first falsy -> the first falsy value

    console.log("User" || "Default") //first truthy value
    // ή το last falsy αν όλα είναι false



