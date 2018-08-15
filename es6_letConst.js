//Before Es6
function doSomething() {
    for (var x = 0; x < 5; x++) { 
       // Technically, x should only be scoped to this block because this is 
       // where we have defined x. 
    }
 
    // But it turns out that x is available here as well! 
    console.log(x); // 5 
 }


doSomething();

//With ES6

/* function doSomething2(){
    for(let x = 0; x <5; x++){
        // With the "let" keyword, now x is only accessible in this block.
    }
    console.log(x) //x is not defined.
}

doSomething2(); */

//With const we can define a constant. So we cannot reassign it later:
const y = 1;
y = 3; // throws "Assignment to constant variable."

console.log(y);