 /*Q _15
 Changing Guest List:  You just heard that one of your guests can’t make the dinner, so you need to 
  send out a new set of invitations. You’ll have to think of someone else to invite.
  Start with your program from Exercise 14. Add a print statement at the end of your program stating the
   name of the guest who can’t make it.
    Modify your list, replacing the name of the guest who can’t make it with the name of the new person 
    you are inviting.
    int a second set of invitation messages, one for each person who is still in your list.*/

    let guestWhowCantMakeIt:string = guest_List[2];
    console.log(`Dear ${guestWhowCantMakeIt} will not coming tomorrow Dinner `);
    guest_List.splice(2,2,"Sania");

    console.log('\n2ndLoop\n');

    for(let i=0; i<guest_List.length; i++) {
      console.log("Respected Madam " + guest_List[i]  + message4 + " \nThank you!\n");
     };
     import{guest_List } from '../45QAssingmant/q_14.js'
     import { message4 } from '../45QAssingmant/q_14.js';