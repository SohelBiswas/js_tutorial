class BankAccount {
     #balance = 0; 
 
     deposit(amount){
        this.#balance += amount
        return `The balance is $ ${this.#balance}`
     }
    //  getbalance(){
    //     return
    //  }
}

let account = new BankAccount()
console.log(account.deposit(30));
