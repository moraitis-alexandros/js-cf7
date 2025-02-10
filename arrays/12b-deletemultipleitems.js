const arr = [1, 2, 3, 2, 5]

const deleteBackwards = (arr, val) => {
    let i = arr.length

    if (!arr) return

    while(i--) {
        if (arr[i] === val) {
            arr.splice(i, 1)
        }
    }

}

deleteBackwards(arr, 2)

console.log(arr)