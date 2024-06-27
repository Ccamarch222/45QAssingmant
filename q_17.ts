
     /*Q _17
     Shrinking Guest List: Add a new line that prints a message saying that you can invite only two people 
     • Remove guests from your list one at a time until only two names remain in your list
     Each time you pop a name from your list, print a message to that person letting them know 
      you’re sorry you can’t invite them to dinner.
      • Print a message to each of the two people still on your list, letting them know they’re still 
       invited.
       • Remove the last two names from your list, so you have an empty list. 
        Print your list to make sure you actually have an empty list at the end of your program.*/

        console.log("\nSorry,we cant range big table, only two people rangement\n");
        while(guest_List.length>2){
          let removeGuest= guest_List.pop();
          console.log(`\nSorry mam ${removeGuest} you are not invited for dinner\n `);
        }   
        for(let i=0; i<guest_List.length; i++) {
          console.log("Respected Madam " + guest_List[i] , + "You are still invited tomorrow dinner " + " \nThank you!\n");
         };
         //Remove tha last two people 
         guest_List.splice(0,2);
         //and print empty list
         console.log(guest_List);
         import{guest_List } from '../45QAssingmant/q_14.js'