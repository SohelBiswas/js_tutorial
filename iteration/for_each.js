const marvel = ["Iron Man", "Thor", "Hulk", "Captain America"]

marvel.forEach (function avenger (heros) {
    // console.log(heros);
    // console.log(avenger);
    
})


const students = [
  {
    name: "Alice",
    age: 20,
    major: "Computer Science"
  },
  {
    name: "Bob",
    age: 22,
    major: "Electrical Engineering"
  },
  {
    name: "Charlie",
    age: 21,
    major: "Mathematics"
  },
  {
    name: "Max",
    age: 22,
    major: "Computer Science"
  },
  {
    name: "Tom",
    age: 21,
    major: "Electrical Engineering"
  },
];

const StudentAge = students.filter( (stud) => stud.age === 21)
console.log(StudentAge);


students.forEach( (stud) => {
    if (stud.age === 21) {
        console.log(stud);
        return stud
    }
})






