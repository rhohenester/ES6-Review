//Destructuring - Arrays

let numbers = [1,2,3];


//The ES5 way...
let a = numbers[0];
let b = numbers[1];

console.log(a);
console.log(b);

//The ES6 way:
let [a2, b2] = numbers;

console.log(a2);
console.log(b2);

console.log(numbers); //This is the same array...doesn't changed nothing!


//======== USING THE REST PARAMETER =========//
// With the rest parameter i am putting out the first value and bring a new array with the remaining values
let [a3, ...b3] = numbers;  //like splice and slice

console.log(b3, 'b3'); //


//======== This is a bit weird =========//

let [ a4 = 'Default', b4, c4, d4 = 'Default'] = numbers; //Basically you get the default value

console.log(a4, "Weird");