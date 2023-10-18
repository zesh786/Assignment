"use strict";
//Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
const inquirer_1 = __importDefault(require("inquirer"));
let answers = await inquirer_1.default.prompt([{
        name: "alien_color",
        type: "list",
        choices: ["Green", "Yellow", "Red"],
        message: "Color"
    }]);
if ("Green") {
    console.log("You have earned 5 points");
}
else if ("Yellow") {
    console.log("You have earned 10 points");
}
else if ("Red") {
    console.log("You have earned 15 points");
}
//b- Write three versions of this program, making sure each message is printed for the appropriate color alien.
let alien1 = "Green";
if (alien1 == "Green") {
    console.log("You have earned 5 points");
}
else {
    console.log();
}
let alien2 = "Yellow";
if (alien2 == "Yellow") {
    console.log("You have earned 10 points");
}
else {
    console.log();
}
let alien3 = "Red";
if (alien3 == "Red") {
    console.log("You have earned 15 points");
}
else {
    console.log();
}
