/*Q _14
Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
Make a list that includes at least three people you’d like to invite to dinner. 
Then use your list to print a message to each person, inviting them to dinner.*/
const guest_List:string[]=["Fiza","Saliha","Rida"];
 
let  message4:string = " we invited you on Dinner tomorrow.";
for(let i=0; i<guest_List.length; i++) {
 console.log("Respected Madam " + guest_List[i]  + message4 + " \nThank you!\n");
};
export{guest_List};
export{message4};