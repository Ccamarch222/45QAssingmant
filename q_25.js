"use strict";
/*Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called
alien_color and assign it a value of 'green', 'yellow', or 'red'.
 Write an if statement to test whether the alien’s color is green. If it is, print a message that
  the player just earned 5 points.
  Write one version of this program that passes the if test and another that fails.
   (The version that fails will have no output.)*/
// Version 1: Passes the if test
let alien_color1 = 'green';
if (alien_color1 === 'green') {
    console.log('Player just earned 5 points.'); // Output: Player just earned 5 points.
}
// Version 2: Fails the if test
let alien_color2 = 'red';
if (alien_color2 === 'green') {
    // No output since the condition is false
}
