let name = 'Raissa';


//Also allows to write multiplines strings
let description = `Yes i know it already ${name + ", but this with one text more, i don't knew before!"} `;

//But when you wnat to show a template literal, you can scape this with 
let description2 = `Yes i know it already \${name + ", but this with one text more, i don't knew before!"} `;


console.log(description, description2);