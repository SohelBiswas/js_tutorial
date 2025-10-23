//  const alias = new alias{
//     "Tony" : "Iron Man",
//     "Steve" : "Captain America",
//     "Banner" : "Hulk",
// }

// console.log(alias);


const alias = new Map()
alias.set("IN", "India")
alias.set("US", "United States of America")
alias.set("FR", "France")
alias.set("BR", "Brazil")

    
// console.log(alias);

for (const [key, value] of alias) {
    console.log(key);
    // console.log(key,":", value);
    
}


