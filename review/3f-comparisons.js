const vat = '123'
const num = 123

let comp1 = num == vat //returns true, js converts string into number in order to make the comparisons, (generally deprecated)

let comp2 = num === vat // returns false due to === because it first checks the type of variables compared

console.log(comp1, comp2)

let temp = 40
let isSunny = temp > 40
let isSunnyStr = (isSunny) ? "Big-Sun" : "Small-Sun"
console.log(isSunnyStr)