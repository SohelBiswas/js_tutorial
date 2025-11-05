const user = {
    _username : "Hulk",
    _email: "hulk@avengers.com",

get email(){
    return this._email.toUpperCase()
},

set email(value){
    this._email = value
}
}

const hulk = Object.create(user)

console.log(hulk._email);

console.log(hulk.email);
