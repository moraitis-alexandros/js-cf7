const shoppingCard = {
    items: [
        {productName: "apples", price: 8.67, quantity: 34 },
        {productName: "bananas", price: 2.27, quantity: 234 },
    ],

    addItemToCard(item) {
        this.items.push(item)
    }


}

shoppingCard.addItemToCard({productName: "honey", price: 18.67, quantity: 234})
console.log(shoppingCard.items)
