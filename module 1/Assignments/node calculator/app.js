const readlineSync = require("readline-sync")
const num1 = readlineSync.questionInt('Please enter your first number');
console.log(num1);
const num2 = readlineSync.questionInt('Please enter your second number');
console.log(num2);
const math = readlineSync.question('Please enter the operation to perform: add, sub, mul, div ');
console.log(math);

if (math === "add") {
    addd(num1, num2)
} else if (math === "mul") {
    mull(num1, num2)
} else if (math === "div") {
    divv(num1, num2)
} else if (math === "sub") {
    subb(num1, num2)
} else {
    console.log('Please enter the operation to preform: add, sub, mul, div ')
}

function addd(num1, num2) {
    console.log('The result is ' + (num1 + num2))
}

function mull(num1, num2) {
    console.log('The result is ' + (num1 * num2))
}

function divv(num1, num2) {
    console.log('The result is ' + (num1 / num2))
}

function subb(num1, num2) {
    console.log('The result is ' + (num1 - num2))
}