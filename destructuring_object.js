let obj = {
    name: 'Raissa',
    age: 27,
    greet: function(){
        console.log("Hello there!");
    }
};

//let { name, age, greet } = obj; //Reference by name, and these names have to match with the properpies from your object
//You can use this with React.js

let { name, age, greet:hello } = obj; 

console.log(name, age);

//greet();

hello();


