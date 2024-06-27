"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.make_great = void 0;
/* Great Magicians
Write a function called make_great() that modifies the array of magicians by adding the phrase the
 Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.*/
const q_41_1 = require("./q_41");
const q_41_2 = require("./q_41");
q_41_1.show_magicians1;
function make_great(Magicians) {
    return Magicians.map((name) => `The Great ${name}`);
}
exports.make_great = make_great;
q_41_2.magician;
let Great_magicians = make_great(q_41_2.magician);
console.log("2nd function");
(0, q_41_1.show_magicians1)(Great_magicians);
