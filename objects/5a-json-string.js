const jsObj = {
    id: 1,
    hobbies: [{id: 1, title: "gym"}, {id: 2, title: "paint"}]
}


const jsonStr = JSON.stringify(jsObj)

console.log(jsObj)

console.log(jsonStr)

const jsObj2 = JSON.parse(jsonStr)
console.log(jsObj2)
