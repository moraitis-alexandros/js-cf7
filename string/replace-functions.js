const s = "Coding Factory"
const s2 = "CODING FACTORY"

const replace = s.replace("Coding", "Code")
console.log(replace)

const lower = s.toLowerCase()
const upper = s.toUpperCase

if (s.toUpperCase() === s2.toUpperCase) {
    console.log("EQUALS")
}

const firstname = "Alice   "
if (firstname.trim() === "Alice") {

}
console.log("Coding".repeat(5))

const concat = s + s2 + "Goodnight"
const concat2 = s.concat(s2).concat("Bye!")
