"use strict";
//Q _18
//Seeing the World: Think of at least five places in the world you’d like to visit.
const ILikeThisPlaces = ["Makka Mukarma", "Madina Manora", "Masjide Aqsa", "Pishawar", "Iran"];
//Print your array in its original order.
console.log("Orignal array" + ILikeThisPlaces);
//Print your array in alphabetical order without modifying the actual list.
console.log('Copy' + [...ILikeThisPlaces].sort());
//Show that your array is still in its original order by printing it.
console.log("Still in orignal order" + ILikeThisPlaces);
//Print your array in reverse alphabetical order without changing the order of the original list.
console.log([...ILikeThisPlaces].sort().reverse());
//Show that your array is still in its original order by printing it again.
console.log("Still in orignal order" + ILikeThisPlaces);
//Reverse the order of your list. Print the array to show that its order has changed.
console.log("Reverse order" + ILikeThisPlaces.reverse());
//Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("back to original order" + ILikeThisPlaces.reverse());
/*Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been
change.*/
console.log("sorted in alphabetical order " + ILikeThisPlaces.sort());
/* Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show
that its order has changed.*/
console.log("sorted in reverse alphabetical order " + ILikeThisPlaces.sort((a, b) => b.localeCompare(a)));
