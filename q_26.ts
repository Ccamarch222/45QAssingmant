/*Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

• If the alien’s color isn’t green, print a statement that the player just earned 10 points.

• Write one version of this program that runs the if block and another that runs the else block.*/

// Version 1: Runs the if block
let alien_color3: string = 'green';

if (alien_color3 === 'green') {
  console.log('Player just earned 5 points for shooting the alien.'); // Expected output
} else {
  console.log('Player just earned 10 points.');
}

// Version 2: Runs the else block
let alien_color4: string = 'red';

if (alien_color4 === 'green') {
  console.log('Player just earned 5 points for shooting the alien.');
} else {
  console.log('Player just earned 10 points.'); // Expected output
}
