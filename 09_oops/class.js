class user {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}abc`    
    }
}

const thor = new user('Thor', 'thor@avengers.com', '1234')

console.log(thor);
console.log(thor.encryptPassword);
