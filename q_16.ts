
     /*Q _16
     More Guests:Start with your program from Exercise 15. Add a print statement to the end of 
     your program informing people that you found a bigger dinner table.
     • Add one new guest to the beginning of your array.
     • Add one new guest to the middle of your array
     • Use append() to add one new guest to the end of your list.
    • Print a new set of invitation messages, one for each person in your list.*/

    console.log("Good news!We have more space for more guest");
    guest_List.unshift("Aima");
    guest_List.splice(Math.floor(guest_List.length/2),0,"saba");
    guest_List.push("Malaaika");

    console.log('\n3rdLoop\n');

    for(let i=0; i<guest_List.length; i++) {
      console.log("Respected Madam " + guest_List[i]  + message4 + " \nThank you!\n");
     };
     import{guest_List } from '../45QAssingmant/q_14.js'
     import { message4 } from '../45QAssingmant/q_14.js';