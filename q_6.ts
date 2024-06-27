//Q _6 
/*Store a person’s name, and include some whitespace characters at the beginning and 
end of the name. Make sure you use each character combination, "\t" and "\n", at least
nce. Print the name once, so the whitespace around the name is displayed. Then print 
Then print the name after striping the white spaces.*/
const name_with_whitespace = "\t \n   Usama  \n \t";
console.log("name with whitespace:", name_with_whitespace)
const name_Stripped = name_with_whitespace.trim();// Strip the whitespace from the name
console.log("name after stripping whitespace:", name_Stripped)