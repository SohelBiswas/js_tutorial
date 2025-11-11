function orderTea (teaType) {
    function confirmOrder() {
        return `Order confirmed for ${teaType}`;
    }
    return confirmOrder()
}
// console.log(orderTea())
// orderTea('chai')
console.log(orderTea('chai'));
console.log(orderTea('masala chai'));
