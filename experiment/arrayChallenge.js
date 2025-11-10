let teas = ['green tea', 'black tea', 'chai', 'oolong tea']
let selectedteas = []

for (let i = 0; i < teas.length; i++) {
    if (teas[i] === 'chai') {
        break;
    }
        selectedteas.push(teas[i])    
}
        console.log(selectedteas);


        
