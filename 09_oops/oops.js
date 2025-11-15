
// const user ={
//     username: "Sohel",
//     loginCount: 10,
//     isLoggedIn: true,
// }

function user(username, loginCount, isLoggedIn) {
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn    
}

const userOne = new user('Sohel', 10, true)
const userTwo= new user('IronMan', 15, false)
// console.log(userOne);
// console.log(userTwo);



class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    if (age<0) 
        throw new Error("Age is not a positive number")
        
    }   

Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name}`);
    
}
