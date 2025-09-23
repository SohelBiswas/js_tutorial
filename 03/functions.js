function myname(){

    // console.log("S");
    // console.log("o");
    // console.log("h");
    // console.log("e");
    // console.log("l");
    
}

// myname()

// function addnum(num1, num2) {
//     // console.log(num1 + num2);    
// }
// return addnum(3,4)


// function loginuserMesage(username = "sam") {
//     if(username ===""){
//         console.log("Please enter a unsername");
//         return
        
//     }
//     return `${username} just logged in`
// }
// loginuserMesage()



// function loginuserMesage(username = "sam") {
//     return `${username} just logged in`;
// }
// loginuserMesage()




function loginuserMesage(username = "sam") {
    if (username === "") {
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`;
}
console.log(loginuserMesage());
