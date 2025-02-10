const arr = [1, 2, 3]

console.log(arr.join(", "))

//ισοδύναμο με
let out = ""
for (const item of arr) {
    out += item + ", "
}
console.log(out)