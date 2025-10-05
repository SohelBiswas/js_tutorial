function login(username) {
    let message =`${username} is logged in`;
    //  return message
}

// console.log(login("Sohel"))


function addnum(num1, num2) {
    if (typeof num1 == 'number' && typeof num2 == 'number') {
        let result = num1 + num2
        return result
    }
    else
        console.log("Not a number");
        
}

// addnum(3, 5)
console.log(addnum(3, 5));
