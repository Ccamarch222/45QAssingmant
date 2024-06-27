"use strict";
//Q_33
/*Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd.
 Most ordinal numbers end in th, except 1, 2, and 3.
 • Store the numbers 1 through 9 in a array.
 • Loop through the array.
 • Use an if-else chain inside the loop to print the proper ordinal ending for each number.
  Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result
   should be on a separate line.*/
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
/*Itration using for...of
the for...of loop is used for iteration over the value of an iterable object.*/
for (const oneNumber of number) {
    let ordanaryEnd;
    if (oneNumber === 1) {
        ordanaryEnd = "st";
    }
    else if (oneNumber === 2) {
        ordanaryEnd = "nd";
    }
    else if (oneNumber === 3) {
        ordanaryEnd = "rd";
    }
    else {
        ordanaryEnd = "th";
    }
    console.log(`${oneNumber} ${ordanaryEnd}`);
}
