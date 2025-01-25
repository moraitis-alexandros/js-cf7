console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)
console.log(Number.POSITIVE_INFINITY) //12/0 -- > positive infinity
console.log(Number.NEGATIVE_INFINITY_INFINITY) //-12/0 -- > negative infinity

Number.isInteger(12.5) ? console.log("True") : console.log("False")

Number.isNan(NaN) ? console.log("True") : console.log("False")
// 10 / "AUEB" output: NaN (Not a number)

isNan(NaN) ? console.log("True") : console.log("False")

console.log(Number.parseInt("44"))
console.log(parseInt("43"))

console.log(Number.parseFloat("44.8"))
console.log(parseFloat(24.23))

const num1 = 0.1 + 0.2
const num2 = 0.3

function compareFloatingPoints(a, b) {
    return Math.abs(a - b) < Number.EPSILON
}

console.log(compareFloatingPoints(num1, num2))