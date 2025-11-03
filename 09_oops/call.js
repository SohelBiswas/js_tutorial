function setUsername(username) {
    this.username = username

}

function createUsername(username, email, pass){

    setUsername.call(this, username)
    this.email = email
    this.pass = pass
}

const userOne = new createUsername("Thor", "thor@avengers.com", 1234)
const userTwo = new createUsername("Hulk", "hulk@avengers.com", 5678)

console.log(userOne)
console.log(userTwo)
