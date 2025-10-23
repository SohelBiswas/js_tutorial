const nums = [1,2,3,4,5,6,7,8,9,10]

const addNums = nums.map( (num) => { return num+10})
// console.log(addNums);

let addNumber = []
addNumber = nums.forEach( (num) => {return num + 10})
// console.log(addNumber);


const newNums = nums.map((num) => num *10 ).map((num) => num +2).map((num) => num - 1).map((num) => num / 5).map((num) => num * 10)
                    .filter((num) => num >=100)
console.log(newNums);

