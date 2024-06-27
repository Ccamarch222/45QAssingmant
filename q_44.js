"use strict";
/* Write a function that accepts a array of items a person wants on a sandwich. The function
 should have one parameter that collects as many items as the function call provides, and it
  should print a summary of the sandwich that is being ordered. Call the function three times,
  , using a different number of arguments each time.*/
function make_Sandwich(...items) {
    console.log("\n making Sandwich with following items:\n");
    items.forEach((singleItem) => console.log(singleItem));
    console.log("\n enjoye with Sandwich!");
}
make_Sandwich("Whole Wheat Bread", "Roast Beef", "Pepper Jack", "Olives", "Hot Sauce", "Sliced Hard-Boiled Eggs");
make_Sandwich("English Muffins", "Chicken Breast", "Mozzarella", "Cucumber", "Olive Oil and Vinegar", "Roasted Garlic");
make_Sandwich("Rye Bread", "Grilled Vegetables", "Mozzarella", "Red Onion/Cucumber", "Mayonnaise", "Sliced Hard-Boiled Eggs");
