function myname(){

    // console.log("S");
    // console.log("o");
    // console.log("h");
    // console.log("e");
    // console.log("l");
    
}

// myname()

function addnum(num1, num2) {
    console.log(num1 + num2);    
}
// return addnum(3,4)


function loginuserMesage(username = "sam") {
    if(username ===""){
        console.log("Please enter a unsername");
                
    }
    return `${username} just logged in`
}
// console.log(loginuserMesage())



function loginuserMesage(username = "sam") {
    return `${username} just logged in`;
}
// console.log(loginuserMesage())




function loginuserMesage(username = "sam") {
    if (username === "") {
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`;
}
// console.log(loginuserMesage());


function cart(order1, order2, ...orderall) {
    return orderall
}
// console.log(cart(100, 200, 300, 400, 500, 600));


const user1 = {
    username: "Sohel",
    price: 200
}

const user2 = {
    username: "IronMan",
    price: 400
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);    
    
}
// handleObject(user1)
// handleObject(user2)



const array = [100, 200, 300, 400 ,500]
function requiredValue(getArray) {
    return getArray[2]
}
// console.log(requiredValue(array));



function name(params) {
    
}


function calculatecart(...num1) {
    return num1
    
}
//  console.log(calculatecart(100, 200, 300 ,400));
