//   Object Literals

const user = {

name: "Sohel",
age: 26,
email: "sohel@google.com",
location: "Kolkata",
IsloggedIn: false

}

// console.log(user);
// console.log(user.email);
// console.log(typeof user.name);
// console.log(typeof user["name"]);


// user.name = "Ironman"
// // console.log(user.name);

// // Object.freeze(user)
// user.age = 20
// // console.log(user);

const user2 = {

name: "Natasha",
age: 26,
email: "nat@google.com",
location: "USA",
IsloggedIn: false

}

user2.greeting = function(){
    console.log(`Hello user , ${this.name}`);
    
};
// console.log(user2.greeting());

//   Objects


const newuser = {}
newuser.name= "Hulk"
newuser.id= 11
newuser.email= 'hulk@avengers.com'
newuser.IsloggedIn= false

const newuser2 = {}
newuser2.name= "Antman"
newuser2.id= 21
newuser2.email= 'Antman@avengers.com'
newuser2.IsloggedIn= true

const newuser3 = {}
newuser3.name= "Spiderman"
newuser3.id= 31
newuser3.email= 'spiderman@avengers.com'
newuser3.IsloggedIn= false

// console.log(newuser, newuser2, newuser3);

// const alluser= {...newuser,...newuser2,...newuser3};
// console.log(alluser);

// const mergeuser = _.merge({}, newuser , newuser2 , newuser3)  **this will not work as loadsh is not installed 
// console.log(mergeuser); 






