//Fat arrow Functions

/* function fn(){  ES5 way
    console.log("Hallo");
};

fn(); */


var fn = () => {
    console.log("hello");
}

//shorter way ~(˘▾˘~)

var fn2 = () => console.log("Hello");

fn();

fn2();

//Another possibilities

var fn3 = () => 'Hello';
console.log(fn3());

//it means the same think in ES5 code

/* function fn3(){
    return 'Hello';
} */

var fn4 = () => {
    let a = 2;
    let b = 2;
    return a + b
}
console.log(fn4());

// With arguments...
var fn5 = (a,b) => {
    return a + b;
}

//Or in the shortest way...
var fn5 = (a,b) => a + b;
console.log(fn5(3,4));

//And when you just have one argument you don't need parenthesis!
var fn6 = a => a + 10;
console.log(fn6(1))

// Using as a callback
setTimeout(() => console.log('Hello'), 1000);


//Just a greeting

var x = greet => console.log(greet);  //returns undefined in the end but don't know why

console.log(x("Hello there..."));