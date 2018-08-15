let a = 5;
let b = 10;

[b, a] = [a,b];

console.log(b);
console.log(a);


let numbers = [1,2,3,4,5,6]; 

let [ a2, , c2 ] = numbers; // i let an value out, just with the space

console.log( a2 , c2 );

 //==== Another example  ====//
 let [a3,b3] = [1,2,3]; //Immediately desctructuring
 console.log(a3,b3)