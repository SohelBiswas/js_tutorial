const user = {
    username: "Sohel",
    price: 500,

    welcomemessage: function () {
        
        console.log(`${this.username}, welcome to the website`);
        console.log(this)
    }
}

// user.welcomemessage()
user.username = "Sam"
// user.welcomemessage()    
// console.log(this)



const chai1 = () => {
    console.log(this);
    
}
// console.log(this);
// chai1()

const chai2 = function (){
    console.log(this);
    
}
// console.log(this);
chai2()

