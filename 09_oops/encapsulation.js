class BankAccount {
     #balance = 0; 
 
     deposit(amount){
        this.#balance += amount
        console.log(`The deposit is ${amount}`);
        
      //   return this.#balance
     }
     getbalance(){
        return ` The balance is $ ${this.#balance}`
     }
}

let account = new BankAccount()
console.log(account.deposit(30));
console.log(account.getbalance());

