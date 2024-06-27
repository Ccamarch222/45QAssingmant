"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.message4 = exports.guest_List = void 0;
/*Q _14
Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
Make a list that includes at least three people you’d like to invite to dinner.
Then use your list to print a message to each person, inviting them to dinner.*/
const guest_List = ["Fiza", "Saliha", "Rida"];
exports.guest_List = guest_List;
let message4 = " we invited you on Dinner tomorrow.";
exports.message4 = message4;
for (let i = 0; i < guest_List.length; i++) {
    console.log("Respected Madam " + guest_List[i] + message4 + " \nThank you!\n");
}
;
