//Hoisting with "Let" and "Const"


//let age; //this is the right place to declare let;
age = 27;
console.log(age);

//let age; //This dont works! We have to declare our variable before initializing it!
var age; //But this works!



// But here we have an exception, because you call the function after declaring the variable (^̮^) 
function doSmth(){
    secondAge = 29;
}

let secondAge;
doSmth();
console.log(secondAge);