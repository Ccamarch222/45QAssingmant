//Q _3
//Name Cases:Store a person’s name in a variable,and then print that person’s name
//in lowercase, uppercase, and titlecase.
const name2 = "Meherban";
console.log("lowercase:", name2.toLowerCase());
console.log("uppercase:", name2.toUpperCase());
console.log(
  "titlecase:",
  name2.charAt(0).toUpperCase() + name2.slice(1).toLowerCase()
);