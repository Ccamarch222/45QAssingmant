/*Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message
hat reads I love TypeScript. Make a large shirt and a medium shirt with the default message, 
and a shirt of any size with a different message.*/

function make_shirt(size:string = "Large",message:string = "I love TypeScript"):void{
    console.log(`The shirt size is ${size} and tha message is ${message}`);
}
//default shirt size and message
make_shirt();
//Make a large shirt and a medium shirt with the default message
make_shirt("medium");
//and a shirt of any size with a different message.
make_shirt("small","TypeScript is awesome");