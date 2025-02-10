const initial = {name: "alice", age: 30, address: {street: "Patision", num: 76}}

//1. With spreading. Spread operator gives a shallow copy
const copyInitial = {...initial} 
console.log(copyInitial)

//2.Object type
const copyInitial2 = Object.assign({}, initial)

//3. With JSON function -- deep copy
const copyInitial3 = JSON.parse(JSON.stringify(initial))

//4. Deep Copy
const copyInitial4 = structuredClone(initial)

