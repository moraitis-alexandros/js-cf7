const calc = {
    add: function(a, b) {
        return a + b
    },

    //2ος τρόπος - πιο σύντομος
    sub(a, b) {
        return a-b
    }
}

console.log(calc.add(5,7))
console.log(calc.sub(10,4))
