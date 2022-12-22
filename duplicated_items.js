const numberArray = [ 1, 2, 3, 3, 4, 4, 6];

const findDuplicated = array => array.filter((item, index) => array.indexOf(item) !== index);

console.log(findDuplicated(numberArray))