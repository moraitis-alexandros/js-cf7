const obj = {id: 1, firstname: "Alice"}

//Add properties

// Modify the object
// obj.lastname = "W."
// console.log(obj)

// Immutable - fresh copy
// const addToObj = (obj, field, value) => ({...obj, [field]: value})

// const objCopy = addToObj(obj, "lastname", "W.")

// console.log(objCopy)


// Modifies / Updates the obj
//Update the object
// obj.firstname = "Koukos"
// console.log(obj)

// Immutable - fresh copy
// const updateObj = (obj, field, newVal) => ({...obj,[field]: newVal})
// const updatedObj = updateObj(obj, "firstname", "Koukis")
// console.log(updatedObj)

//Delete a property of an object

//Immutable delete
const deleteFromObj = (obj, field) => {
    const {[field]: _ , ...objToReturn } = obj
    return objToReturn
}


const objFromDelete = deleteFromObj(obj, "id")
console.log(objFromDelete)
