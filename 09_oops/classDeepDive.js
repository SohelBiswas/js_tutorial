class Vehicle {
    constructor(make, model, year) {
        this.make = make
        this.model = model
        this.year = year
    }

    start(){
        return `The ${this.model} is ${this.make} from ${this.year}`
    }
}

class Car extends Vehicle {
    drive(){
        return ` This is an example of inheritance : ${this.make} ${this.model} ${this.year} `;
    }
}

let myCar  = new Car("Lamborgini", "Urus", "2025")
let myCarTwo = new Car("Toyota", "Supra", "1999")

console.log(myCar);
console.log(myCar.start());
console.log(myCar.drive());

console.log(myCarTwo);
console.log(myCarTwo.start());
console.log(myCarTwo.drive());



