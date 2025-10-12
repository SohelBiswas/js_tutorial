class User {

    constructor(name, email, password){
        this.name = name;
        this.email = email;
        this.password = password
    }

    accountCreation(){
        console.log(`${this.name} is created`);   
    }
}

let user1 = new User("Sohel", "sohel@gmail.com", "Sohel@123##")
user1.accountCreation()
console.log(typeof User);
