const arr = [1, 2, 4, 5, 2, 7, 3, 7, 8, 5, 1]

const result = calculate(arr, 2)
console.log(result)


//function να επιστρέφει ένα πίνακα με τις θέσεις
//στις οποίες βρίσκεται ένας συγκεκριμένος αριθμός

 function calculate(arr, num) {
    const resultArray = []
    j = 0
    for (let i = 0; i <  arr.length; i++) {
        if (arr[i] === num) {
               resultArray[j] = i 
               j++;
        }
    }   
    return resultArray
}


//2ος τρόπος
const getIndexes = (arr, val) => {
    const indexes = []
    arr.forEach((v, index) => {
        if (val == v) {
            indexes.push(index)
        }
    })
    return indexes
}


console.log(getIndexes(arr, 7))
