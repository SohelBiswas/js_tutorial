function login(username) {
    let message =`${username} is logged in`;
    //  return message
}

// console.log(login("Sohel"))


// **********Test 1**************
// ******************************

function addnum(num1, num2) {
    if (typeof num1 == 'number' && typeof num2 == 'number') {
        let result = num1 + num2
        return result
    }
    else
        console.log("Not a number");
        
}

// addnum(3, 5)
// console.log(addnum(3, 5));


// **********Test 2**************
// ******************************

function addnum(num1, num2) {
    if (typeof num1 == 'number' && typeof num2 == 'number') {
        let result = num1 + num2
        return result
    }    
    // return console.log("Not a number");
    
   return "Not a number";
  
}

// console.log(addnum(3, 5));

// *****************Object in Function***********
// 

const avenger = {
    name: "Tony Stark",
    alias: "Iron Man",
    serialno: 1
}

function handleObject(marvel) {
    console.log(`The name of the Avenger is ${amarvel.name}, alias is ${marvel.alias} and serial is ${marvel.serialno}`);
    
}

 handleobject(avenger);


// *****************Array in Function***********
// 

const arr = [100, 200, 300, 400]

function handleobject(anyobject) {
    
    // console.log(`The array is ${anyobject}`);
    // return arr[1]
}
// console.log(handleobject(arr));

// handleobject(arr)