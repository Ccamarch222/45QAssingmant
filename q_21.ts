/*Q _21
They think of something you could store in a TypeScript Object. Write a program that
creates Objects containing these items.*/

interface programingLanguage {
    name: string;
    creator: string;
    year: number;
}

let programingLanguage:programingLanguage []= [{
    name: "python",
    creator:"Guido van Rossum",
    year: 1991
},{
    name: "JavaScript",
    creator:"Brendan Eich",
    year:1995
},{
    name:"java",
    creator:"James Gosling",
    year:1995
}
    ];
    console.log("List of popular programing languages with details:");
    programingLanguage.forEach(language => {
        console.log(`\nName: ${language.name}, Creator: ${language.creator}, year: ${language.year}\n`);
    });