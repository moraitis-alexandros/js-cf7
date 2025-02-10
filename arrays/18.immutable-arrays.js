const numbers = [1, 2, 3, 4]

//Modifies the initial array
numbers.push(5)
numbers.splice(4,0,5)
const numbersNew = [...numbers,6]

function addToArrayEnd(arr, num) {
    return [...arr, num]
}

function addToArrayFirst(arr, num) {
    return [num, ...arr]
}

function addToArrayAtIndex(arr, num, index) {
    return [...arr.slice(0, index), num, ...arr.slice(index)]
}
console.log(numbersNew)


//Updates
numbers.splice(3,1,8)

const updateArray = (arr, newValue) => arr.map(item => newValue)

//Fresh Copy
const updateOneItem = (arr, index, newValue) => 
    arr.map((item, i) => (i === index) ? newValue : item)

const updatedNumbers = updateOneItem(numbers, 2, 17)
console.log(updatedNumbers)

//Delete
//Modifies initial array
numbers.splice(0, 1)


//Fresh Copies
const deleteFromArray = (arr, num) => arr.filter(item => item != num)

const deleteByIndex = (arr, index) => [...arr.slice(0, index), ...arr.slice(index+1)]

