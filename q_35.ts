/*Animals: Think of at least three different animals that have a common characteristic. Store the 
 names of these animals in a list, and then use a for loop to print out the name of each animal. • 
 Modify your program to print a statement about each animal, such as A dog would make a great pet.
  Add a line at the end of your program stating what these animals have in common. You could print 
   a sentence such as Any of these animals would make a great pet!*/

    const animals:string[] =["dog","cat","rabbit"];
    animals.forEach((animals) => {
        if(animals === "dog") {
            console.log("A dog is known for its loylty and companionship.");
        } else if (animals === "cat") {
            console.log("A cat is independent and playful.");
        }else if (animals === "rabbit") {
            console.log("A rabbit is a quiet and gentle.");
        }
    });
     //Add a line at the end of your program stating what these animals have in common.
     console.log("Any of these animals would make a great pet!");

    

