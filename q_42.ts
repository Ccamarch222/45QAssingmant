/* Great Magicians
Write a function called make_great() that modifies the array of magicians by adding the phrase the
 Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.*/
import { show_magicians1 } from "./q_41"
import { magician } from "./q_41"

show_magicians1

 function make_great(Magicians:string[]){
    return Magicians.map((name) => `The Great ${name}`)
 }

 magician
 let Great_magicians= make_great(magician);
 console.log("2nd function")
 show_magicians1(Great_magicians);
 export {make_great};