class user {
    constructor(username) {
        this.username = username
    }
    
    logMe(){
        console.log(`Username is ${this.username}`);
        
    }
}
    class teacher extends user {
        constructor(username, email, password) {
            super(username)
            this.email = email
            this.password = password
        }

        addcourse(){
            console.log(`A course was added by ${this.username}`);
            
        }
    }

const loki = new teacher('Loki', 'loki@avengers.com', 1234)
const thanos = new teacher('Thanos', 'Thanos@avengers.com', 1234)

loki.logMe()
thanos.logMe()

loki.addcourse()
thanos.addcourse()
