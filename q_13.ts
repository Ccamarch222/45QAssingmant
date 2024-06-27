/*Q _13
 Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car,
 and make a list that stores several examples. Use your list to print a series of statements 
 about these items, such as “I would like to own a Honda motorcycle.”*/

 const transportation = [{type:"Motorcycle" , name: "Harley-Davidson"},
  {type: "car" , name: "Toyota corolla"},
  {type: "motorcycle" , name: "Honda"},
  {type: "motorcycle" , name:"Suzuki"},
  {type: "motorcycle" , name:"Ducati"}, 
  {type: "motorcycle" , name:"Triumph"},
  {type: "car" , name:"Tesla Car"}];

const cars = transportation.filter(transportation => transportation.type === "car" );

cars.forEach(car => {
  console.log("\n   \n" ,`I would like to own a ${car.name}`)
});
