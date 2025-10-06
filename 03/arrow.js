const user = {
    username: "Sohel",
    price: 500,

    welcomemessage: function () {
        
        console.log(`${this.username}, welcome to the website`);
        console.log(this)
    }
}

user.welcomemessage()
user.username = "Sam"
user.welcomemessage()    
// console.log(this)





