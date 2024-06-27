"use strict";
/*Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent
if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.
• Write five if statements. Each should check whether a certain kind of fruit is in your array.
 If the fruit is in your array, the if block should print a statement, such as You really like bananas!*/
const favoriteFruits = ["Apple", "Mango", "Banana"];
if (favoriteFruits.includes("Apple")) {
    console.log("I really like Apples!");
}
if (favoriteFruits.includes("Mango")) {
    console.log("I really like Mangoes!");
}
if (favoriteFruits[2]) {
    console.log("I really like Bananas!");
}
if (favoriteFruits.includes("grapes")) {
    console.log("I really like grapes!");
}
if (favoriteFruits.includes("Orange")) {
    console.log(" I really like Orange! ");
}
