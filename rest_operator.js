//Rest Operator

let number = [1,2,3,4,5,10];

function sumUp(toAdd){
    let result = 0;
    for (let i = 0 ; i < toAdd.length; i ++) {
       result += toAdd[i]; //return the sum of all numbers
       //console.log(toAdd[i])
    }
    return result;
}

console.log(sumUp(number));

//Rest Operator

function sumUp2(...toAdd){ //This is like magic!
    console.log(toAdd); // The rest operator transformed my three arguments in a new Array <3
    let result = 0;
    for (let i = 0 ; i < toAdd.length; i ++) {
       result += toAdd[i]; //return the sum of all numbers
       //console.log(toAdd[i])
    }
    return result;
}

console.log(sumUp2(10,20,"30"));