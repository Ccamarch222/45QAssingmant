/*Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien.*/


// Version 1: Alien is green
let alien_color1: string = 'green';

if (alien_color1 === 'green') {
  console.log('Player earned 5 points for shooting the green alien.');
} else if (alien_color1 === 'yellow') {
  console.log('Player earned 10 points for shooting the yellow alien.');
} else if (alien_color1 === 'red') {
  console.log('Player earned 15 points for shooting the red alien.');
}


console.log('---');

// Version 2: Alien is yellow
let alien_color2: string = 'yellow';

if (alien_color2 === 'green') {
  console.log('Player earned 5 points for shooting the green alien.');
} else if (alien_color2 === 'yellow') {
  console.log('Player earned 10 points for shooting the yellow alien.');
} else if (alien_color2 === 'red') {
  console.log('Player earned 15 points for shooting the red alien.');
}

console.log('---');

// Version 3: Alien is red
let alien_color3: string = 'red';

if (alien_color3 === 'green') {
  console.log('Player earned 5 points for shooting the green alien.');
} else if (alien_color3 === 'yellow') {
  console.log('Player earned 10 points for shooting the yellow alien.');
} else if (alien_color3 === 'red') {
  console.log('Player earned 15 points for shooting the red alien.');
}
 export{}