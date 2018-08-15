//Template Literals
//https://programmingwithmosh.com/javascript/essential-modern-javascript-features/ 

//Before ES6
var name = 'Mosh';
var message1 = 'Hi ' + name + ',';

//With Es6
var name= 'Mosh';
var message2 = `Hi ${name}, `;

// 

var message3 = `
Hi ${name},

Thank you for joining my mailing list. 

Happy coding,
Mosh
`;

console.log(message1, message2, message3);

