const numbers = [1, 2, 3, 2]

const findIndexes = (arr, num) => 
    arr.reduce((indexes, el, index) => el === num ? [...indexes, index] : indexes, [])

console.log(findIndexes(numbers,2))