let numbers = [1,2,3,4];

console.log(Math.max(...numbers));


var max = numbers.reduce(function(a,b){
       return Math.max(a,b)
   }
);


console.log(max);