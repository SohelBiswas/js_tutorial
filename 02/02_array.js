const marvel_heros = ["IronMan","Captain America", "Thor", "Hulk" ]
const dc_heros = ["Batman" , "Superman", "Wonder Woman", "Flash"]
const desi_heros = ['Shaktima', 'Chota Bheem', 'Krrish']
// console.log(marvel_heros, dc_heros);

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);


const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);


const new_heros = [...marvel_heros, ...dc_heros, ...desi_heros]

// console.log(new_heros);

// console.log(Array.isArray('Sohel'));
// console.log(Array.from('Sohel'));

let score1 = 2374
let score2 = 748
let score3 = 39084

console.log(Array.of(score1, score2, score3));

