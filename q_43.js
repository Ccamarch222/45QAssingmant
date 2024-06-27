"use strict";
/*Unchanged Magicians:
 Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be
 unchanged return the new array and store it in a separate array. Call show_magicians() with each array to show
  that you have one array of the original names and one array with the Great added to each magician’s name.*/
Object.defineProperty(exports, "__esModule", { value: true });
const q_41_1 = require("./q_41");
const q_41_2 = require("./q_41");
const q_42_1 = require("./q_42");
q_41_1.show_magicians1;
q_42_1.make_great;
q_41_2.magician;
//copy of orignal array through slice function
let copy_magician = q_41_2.magician.slice();
//modify the copy array to include " the great" with their names
let copy_Great_magicians = (0, q_42_1.make_great)(copy_magician);
//original 
console.log("origanal array");
(0, q_41_1.show_magicians1)(q_41_2.magician);
//copie
console.log("copy array");
(0, q_41_1.show_magicians1)(copy_Great_magicians);
