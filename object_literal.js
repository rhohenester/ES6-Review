// Object Literal Extensions
let name = 'Max';
let age = 30;

let ageField = "Years old";


let obj = { 
    name: 'Raissa',
    //age,
    //age: 27
    [ageField]: 27,
    greet() {
        console.log( this.name + ', ' + this.age);
    }
}
console.log(obj);
console.log(obj.greet());


let obj2 = { //in this case i will receive the previous age
    name: 'Maximilian',
    //age: 27
    age,
    "greet me"() {
        console.log( this.name + ', ' + this.age);
    }
}
console.log(obj2);
console.log(obj2["greet me"]()); // I call like this because now greet function is a string

console.log(obj["Years old"]);
console.log(obj[ageField]);