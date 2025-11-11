// let teas = ['green tea', 'black tea', 'chai', 'oolong tea']
// let selectedteas = []

// for (let i = 0; i < teas.length; i++) {
//     if (teas[i] === 'chai') {
//         break;
//     }
//         selectedteas.push(teas[i])    
// }
//         console.log(selectedteas);





let teas = ['green tea', 'black tea', 'chai', 'oolong tea']
let selectedteas = []

for (let i = 0; i < teas.length; i++) {
    if (teas[i] === 'chai') {
        continue;
    }
        selectedteas.push(teas[i])    
}
        console.log(selectedteas);


        


let numbers = [1,2,3,4,5]
let smallNumbers = []

for (const num of numbers) {
    if (num === 4) {
        break;
    }
    smallNumbers.push(num)
}
console.log(smallNumbers);




let citiesPopulation = {
    'london': 2000,
    'New York': 3000,
    'Paris': 4000,
    'Berlin': 5000,
};
let citiesNewPopulation = {}

for (const city in citiesPopulation) {

    if (city =='berlin' || city == 'Berlin') {
        break;
    }

    citiesNewPopulation[city] = citiesPopulation[city]
    // console.log(citiesNewPopulation);
}

console.log(citiesNewPopulation);


