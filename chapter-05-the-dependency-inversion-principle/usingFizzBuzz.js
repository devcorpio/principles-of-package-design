const fizzBuzz = require('./fizzBuzz');

const fizzBuzzInstance = fizzBuzz();
const list = fizzBuzzInstance.generateList(100);

console.log(list);
