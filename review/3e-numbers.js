let num1 = 10
let num2 = 3

let divResult = num1 / num2
let expr = (num2 / num1) * (8.5 / 3.3)

let fixedDiv = (num1 / num2).toFixed(1)
let intResult = Math.floor(num1 / num2) //returns int --bottom limit
let upperInt = Math.ceil(num1 / num2) //returns int --upper limit
let roundResult = Math.round(num1 / num2) //rounds up for .5 and up, rounds down otherwise

let modResult = num1 % num2 //JS & Java remaing part of a division (Το modulo διατηρεί το πρόσημο του διαιρετέου)


console.log(expr)
console.log(divResult)
console.log(fixedDiv)
console.log(intResult)
console.log(upperInt)
console.log(roundResult)
console.log(modResult)