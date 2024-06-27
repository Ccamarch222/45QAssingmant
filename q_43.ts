/*Unchanged Magicians: 
 Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be 
 unchanged return the new array and store it in a separate array. Call show_magicians() with each array to show 
  that you have one array of the original names and one array with the Great added to each magician’s name.*/

  import { show_magicians1 } from "./q_41";
  import { magician } from "./q_41";
  import { make_great } from "./q_42";
  show_magicians1
  make_great
  magician
  //copy of orignal array through slice function
  let copy_magician = magician.slice();
  //modify the copy array to include " the great" with their names
   let copy_Great_magicians = make_great(copy_magician);

   //original 
    console.log("origanal array");
    show_magicians1(magician);
    //copie
    console.log("copy array");
    show_magicians1(copy_Great_magicians);

