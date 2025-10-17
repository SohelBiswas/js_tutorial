shoppingCart = [100, 200, 300, 500, -100]

const finalvalue = shoppingCart.reduce(function (acc, curval) {

    console.log(`acc value ${acc} and curval is ${curval}`);
    return acc + curval        
}, 0)
console.log(finalvalue);



myntraCart = [
    {
        item : " Snitch Pant",
        price : 599
    },
    {
        item : "Turtle Shirt",
        price : 499
    },
    {
        item : "Reebok Shoe",
        price : 1299
    },
    {
        item : "Titan Watch",
        price : 2999
    },
]
let gst = 25;
const cartValue = myntraCart.reduce(function (acc, item) { 
    console.log(`Starting value ${acc} and cart value ${item.price}`);
        return acc + item.price;
    
}, gst)

console.log(cartValue);
