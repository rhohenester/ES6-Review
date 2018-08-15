let numbers = [1,2,3,4,5];

console.log(Math.max(numbers)); // Here you receive NaN
console.log(...numbers);  // Takes the array and splits it out in individual values
console.log(Math.max(...numbers)); // Here it works!


//Is exactly the oposite of the REST operator!

/* var max = numbers.reduce(function(a,b){
    return Math.max(a,b)
}
);


console.log(max); */ //Classic way


/* var max = numbers.reduce( (a,b) => {
  return Math.max(a,b)  
}
)

console.log(max); */ //Classic short way