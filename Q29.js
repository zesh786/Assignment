"use strict";
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
Object.defineProperty(exports, "__esModule", { value: true });
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
let favorite_fruits = ["Apple", "Banana", "Peach"];
if (favorite_fruits.includes("Apple")) {
    console.log('You really like apples!');
}
else {
    console.log('No apples found');
}
if (favorite_fruits.indexOf("Banana") != -1) {
    console.log("You really lik Bananas!");
}
else {
    console.log('No Bananas found');
}
if (favorite_fruits.includes("Peach")) {
    console.log('You really like Peaches');
}
else {
    console.log('No Peaches found');
}
if (favorite_fruits.indexOf("Mango") != -1) {
    console.log('You really like Mangoes');
}
else {
    console.log('No Mangoes found');
}
if (favorite_fruits.includes("Plums")) {
    console.log('You really like Plums');
}
else {
    console.log('No Plums found');
}
