"use strict";
//Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
let alien_color = "Yellow";
// If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
if (alien_color == "Green") {
    console.log(`You have earned 5 points`);
}
if (alien_color !== "Green") {
    console.log(`You have earned 10 points`);
}
else {
    console.log();
}
//Write one version of this program that runs the if block and another that runs the else block.
let Alien_Color = "Green";
if (Alien_Color == "Green") {
    console.log("You have earned 5 points");
}
else {
    console.log("You have earned 10 points");
}
