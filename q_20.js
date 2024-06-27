"use strict";
//Q _20
/*Think of something you could store in a array. For example, you could make a list of mountains
 rivers, countries, cities, languages, or anything else you’d like. Write
 a program that creates a list containing these items.*/
const programingLanguages = [
    "python",
    "javascript",
    "java",
    "C++",
    "C#",
    "Ruby",
    "Go",
    "swift",
    "PHP",
    "Kotlin",
];
console.log("List of popular Prograniming Languages");
// for (let i=0; i<programingLanguages.length; i++) {
//     console.log(programingLanguages);
//     break;
// }
programingLanguages.forEach(language => {
    console.log(language);
});
