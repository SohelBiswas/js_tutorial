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
// console.log(processTeaOrder(makeTea));




// function createTeaMaker() {
//     return randomfn
// }

// function randomfn(teaType) {
//     return `Making ${teaType}`
    
// }

// // teaMaker = randomfn('green tea')
// // createTeaMaker(teaMaker)
// // console.log(createTeaMaker());
// console.log(randomfn('green tea'));
// // console.log(createTeaMaker());


// // console.log(teaMaker);



function createTeaMaker() {
    return function (teaType){
        return `making tea ${teaType}`
    }
}

let teaMaker = createTeaMaker("green tea")



function sumOfN(n) {
  let sum = 0;
  for(let i = 0; i <= n; i++){
      sum = sum + i;
  }
  
  return sum;
}
console.log(sumOfN());



