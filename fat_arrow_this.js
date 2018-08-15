 //Fat Arrow Functions & "This"


function fn(){
    console.log(this);
}

//fn();

var fn2 = () => console.log(this);

fn2();