const users  = [


        {id: 1, firstname: "Alice", email: "AA@gmail.com", isActive: true},
        {id: 2, firstname: "Bob", email: "bb@gmail.com", isActive: false},
        {id: 3, firstname: "Koukos", email: "cc@gmail.com", isActive: true}
]

users.forEach(u =>console.log(u.firstname))

const emails = users.map(user => user.email)
console.log(emails)

const activeUsers = users.filter(c => c.isActive === true)
console.log(activeUsers)

const cart = [
    {title: "laptop", price: 1000, stock: 10},
    {title: "mouse", price: 50, stock: 0},
    {title: "keyboard", price: 80, stock: 20},
]

const totalSum = cart.reduce((total, item) => total + item.price, 0)
console.log(totalSum)

const user = users.find(user => user.id === 1)
const userIndex = users.findIndex(user => user.id === 1)
console.log(user)

const isOutOfSTock = cart.some(item => item.stock == 0)
const isAllOutOfSTock = cart.every(item => item.stock == 0)
console.log(isOutOfSTock) //true
console.log(isAllOutOfSTock) //false

const posts = [
   { title: "post1", tags: ["js", "web"]},
   { title: "post2", tags: ["nodejs", "backend"]},
   { title: "post3", tags: ["react", "frontend"]},
]

const allTags = posts.flatMap(post => post.tags)

console.log(allTags)

const fruits = ["Apples", "Oranges"]

for (const [index, fruit] of fruits.entries) {
    console.log(`Index: ${index} Fruit: ${fruit} `)
}

