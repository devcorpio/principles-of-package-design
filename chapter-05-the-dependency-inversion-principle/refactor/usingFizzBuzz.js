const fizzBuzz = require('./fizzBuzz');
const fizzBuzzRule = require('./fizzBuzzRule');
const fizzRule = require('./fizzRule');
const buzzRule = require('./buzzRule');

const fizzBuzzInstance = fizzBuzz();

fizzBuzzInstance.addRule(fizzBuzzRule());
fizzBuzzInstance.addRule(fizzRule());
fizzBuzzInstance.addRule(buzzRule());

const list = fizzBuzzInstance.generateList(100);

console.log(list);
