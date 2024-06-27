"use strict";
/*Q _16
More Guests:Start with your program from Exercise 15. Add a print statement to the end of
your program informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array
• Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list.*/
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Good news!We have more space for more guest");
q_14_js_1.guest_List.unshift("Aima");
q_14_js_1.guest_List.splice(Math.floor(q_14_js_1.guest_List.length / 2), 0, "saba");
q_14_js_1.guest_List.push("Malaaika");
console.log('\n3rdLoop\n');
for (let i = 0; i < q_14_js_1.guest_List.length; i++) {
    console.log("Respected Madam " + q_14_js_1.guest_List[i] + q_14_js_2.message4 + " \nThank you!\n");
}
;
const q_14_js_1 = require("../45QAssingmant/q_14.js");
const q_14_js_2 = require("../45QAssingmant/q_14.js");
