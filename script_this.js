var button = document.querySelector("button");

var fn = () => console.log(`I am a ${this}`); //This refers to window object

function fn2(){ //This refers to the html element
    console.log(this);
}

button.addEventListener('click', fn);
//This is a super important key diference!