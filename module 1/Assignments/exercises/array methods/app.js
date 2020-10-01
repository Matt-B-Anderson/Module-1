var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

var oneVeg = vegetables.pop();
console.log(vegetables);

var oneFruit = fruit.shift();
console.log(fruit);

var orangeIndex = fruit.indexOf("orange");
console.log(orangeIndex);

var addFruit = fruit.push(orangeIndex);
console.log(fruit);

var vegLength = vegetables.length;
console.log(vegLength);

var addVeg = vegetables.push(vegLength);
console.log(vegetables)


var food = fruit.concat(vegetables);
console.log(food);

var cut = food.splice(4, 2);
console.log(food);

var reverse = food.reverse();
console.log(reverse);

var string = food.toString();
console.log(string);