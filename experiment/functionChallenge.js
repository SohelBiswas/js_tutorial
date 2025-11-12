function orderTea (teaType) {
    function confirmOrder() {
        return `Order confirmed for ${teaType}`;
    }
    return confirmOrder()
}
// console.log(orderTea())
// orderTea('chai')
// console.log(orderTea('chai'));
// console.log(orderTea('masala chai'));





const calculateTotal = (price , quantity) => {
    return price * quantity;
}

let totalCost = calculateTotal(100, 2)
// console.log(totalCost);

// console.log(calculateTotal(5,2));





function processTeaOrder(makeTea) {
    return makeTea('earl grey')
}

function makeTea(teaType) {
    return `Ordered tea is ${teaType}`
}

// const orderedTea = processTeaOrder(makeTea)
// console.log(orderedTea);
console.log(processTeaOrder(makeTea));




