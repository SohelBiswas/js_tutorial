const marvel = ["Tony", "Iron Man", "Thor", "Hulk"]
// console.log(marvel.length);

for (let index = 0; index <= marvel.length; index++) {
    const element = marvel[index];
    // console.log(element);
    
}


for (let index = 1; index < 20;index++) {
//    console.log(`The value is ${index}`);
 if (index == 5) {
    // console.log("5 Detected");    
    break;    
 }      
}
for (let index = 1; index < 20;index++) {
   console.log(`The value is ${index}`);
 if (index == 5) {
    console.log("5 Detected");    
    continue;    
 }      
}



const nicco = ["Sohel", "Sohela", "Ani", "Pallami", "Sujata"]
let members = nicco.length
console.log(`Members for Nicco park are: ${members}`);
