//Default Parameters
function isEqualTo(number, compare){
    return number == compare;
}
console.log(isEqualTo(10,10));
//here the answer is True

function isEqualTo2(number, compare = 0){
    return number == compare
}
console.log(isEqualTo2(10));
//here the answer is False


//=============
// I can also simple call the function and set the values in
// the argument

function isEqual3( number =9, compare = 10) {
    return number == compare
}

console.log( isEqual3())


//=============
// You can also just pass one argument to a function with two arguments just passing one argument and setting the next argument:

function isEqual4( number, compare = 10) {
    return number == compare
} 

console.log( isEqual4(10))
