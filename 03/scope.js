function one() {
    const username = 'Hulk'
    
    function two(){
        const originalname = "Bruce Banner" 

        console.log(originalname);
        
        }

    two()
    // console.log(username);
    // return one()
}
// console.log(username);
// one()


const chai =  () => {
    let username = "hitesh"
    console.log(this);
}
chai()