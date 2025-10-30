function store(product, price) {
    this.product = product
    this.price =price   
}

const tea = new store('Tea', 20)
const coffee = new store("Coffee", 120)

store.prototype.printMe = function() {
    console.log(`The item is ${this.product} and the price is ${this.price}`)};
    

tea.printMe()
coffee.printMe()