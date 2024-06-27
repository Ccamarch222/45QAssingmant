/*No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.*/
let user:string[] =["Admin","Ali","Imtisal","Rohan","Halima"]
user = [];

if(user.length === 0) {
    console.log("we need to find some users!");
} else {
    user.forEach((oneuser) => {
        if(oneuser ==="admin") {
            console.log(`Hello ${oneuser}, would you like see a status repot?`)
        } else{
            console.log(`thank you ${oneuser} for logging again`)
        }

    

 } );
}