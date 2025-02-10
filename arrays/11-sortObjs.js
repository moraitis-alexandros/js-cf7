const objArray = [

    {id : 1, first: "Bob", age : 23},
    {id : 2, first: "ALice", age : 25},
    {id : 3, first: "Koukos", age : 52},
    {id : 4, first: "Koukos", age : 44}

]

//Sort by age
objArray.sort(function(a, b){
    return a.age - b.age
})

console.log(objArray)


//Sort by first age
objArray.sort(function(a, b){
    
    if (a.first === b.first) {
        return a.age - b.age
    }
    return a.first.localeCompare(b.first)
    
})

console.log(objArray)