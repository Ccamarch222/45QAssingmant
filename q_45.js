"use strict";
/*Write a function that stores information about a car in a Object. The function should always
receive a manufacturer and a model name. It should then accept an arbitrary number of keyword
arguments. Call the function with the required information and two other name-value pairs, such a
 color or an optional feature. Print the Object that’s returned to make sure all the information
  was stored correctly.*/
function car_Info(manufacturer, model, ...options) {
    //object with manufacturere and model
    let car = {
        manufacturer: manufacturer,
        modelName: model
    };
    //add additional options to the car object
    options.forEach((option) => {
        let [key, value] = option.split(":");
        car[key.trim()] = value.trim();
    });
    return car;
}
let my_Car = car_Info("Toyota", "Corolla", "Color:blue", "sunroof:true");
// Print the Object that’s returned to make sure all the information  was stored correctly.
console.log(my_Car);
