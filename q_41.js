"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.magician = exports.show_magicians1 = void 0;
/* Make a array of magician’s names. Pass the array to a function called show_magicians()
 which prints the name of each magician in the array.*/
function show_magicians1(magician) {
    magician.forEach((name) => console.log(name));
}
exports.show_magicians1 = show_magicians1;
const magician = ["Shin Lim", "Harry Houdini", "Penn & Teller", "Ricky Jay "];
exports.magician = magician;
show_magicians1(magician);
