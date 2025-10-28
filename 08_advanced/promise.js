//////////// RESOLVE

new Promise(function (resolve, reject) {
    setTimeout(function () {
    //    console.log("Task completed");
        resolve()
    }, 2000);
}).then(function (){
    // console.log("Promise Resolved");
    
})

////////////  With Arrow function

new Promise((resolve, reject) => {
    setTimeout( ()=> {
    //    console.log("Task completed");
        resolve()
    }, 2000);
}).then( ()=> {
    // console.log("Promise Resolved");
    
})


/////////////// Promise - Resolve and Reject

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false
        if (error) {
            resolve({ username : "sohel", pass : "123", })
        } else {
                reject('Error occured')
            }
            
        
    }, 1000);
})

promise
.then((user)=>{
    console.log(user);
    return user.pass
})
.then((username)=>{
    // console.log(username);
    
})
.then((pass) => {
    console.log(pass);
    
})
.catch(function(error) {
    // console.log('Error happened');
    
})


////////////////// With Async Await

const promisefive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false
        if (!error) {
            resolve({ username : "sohel", pass : "123", })
        } else {
                reject('Error occured')
            }
            
        
    }, 1000);
})

async function consumePromise() {

    try {
        const response = await promisefive
    console.log(response);
    } catch (error) {
        console.log("Error occured");
        
    }
    
    
}

consumePromise()


fetch('https://api.github.com/users/SohelBiswas')
.then( (response) => {
    return response.json()
})
.then( (data)=> {
    console.log(data);    
})
.catch((error)=>{
    console.log("Errrrrooooorrr");
    
})