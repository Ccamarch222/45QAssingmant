/* Make a array of magician’s names. Pass the array to a function called show_magicians()
 which prints the name of each magician in the array.*/
function show_magicians1(magician:string []){
    magician.forEach((name) =>console.log(name))
}

const magician:string [] =["Shin Lim","Harry Houdini","Penn & Teller","Ricky Jay "];
show_magicians1(magician);
export{show_magicians1};
export{magician};

