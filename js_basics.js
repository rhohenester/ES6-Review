//Variables
//Arrays
//Loops
//Conditionals
//Comparisons & Operators
//Objects
//Functions
//Program Flow
//Data types
//Prototypes
//Events


//Where does Js Run?
//Client side, runs in the Browser...

//Let and Const - new in ES6


if (true) {
    var name = "Raissa" //when i use let, this variable is not more available in the global scope 
} //Let allow us to use block scoping

console.log(name);


//Const
const age = 27;
//age = 29  TypeError: Assignment to constant variable.
console.log(age);

//Const creates an immutable binding. const does not indicate that a value is ‘constant’ or immutable. A const value can definitely change. 
const ages = [27, 29, 31];
console.log(ages);
ages.push(25);
console.log(ages);

const obj = {
    age: 27
}

console.log(obj)

obj.age = 30;

console.log(obj);


//So, how to make a value immutable?
//Primitive values, i.e. numbers, strings, booleans, symbols, null, or undefined, are always immutable.

var foo = 27;
foo.bar = 42;
console.log(foo.bar);
// → `undefined`
//To make an object’s values immutable, use Object.freeze(). It has been around since ES5 and is widely available nowadays.

const foo = Object.freeze({
	'bar': 27
});
foo.bar = 42; // throws a TypeError exception in strict mode;
              // silently fails in sloppy mode
console.log(foo.bar);
// → 27