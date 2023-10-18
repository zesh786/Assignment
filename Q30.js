"use strict";
// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
const inquirer_1 = __importDefault(require("inquirer"));
let username = ["Admin", "Zeeshan01", "Babar001", "Ottis007", "Homie123p"];
let user = [{
        name: "Name",
        type: "string",
        message: "Enter username"
    }];
let { Name } = await inquirer_1.default.prompt(user);
if (Name == username[0]) {
    console.log(`Hello ${Name}, would you like to see a status report?`);
}
else if (Name == username[1] || username[2] || username[3] || username[4]) {
    console.log(`Hello ${Name}, Thank you for logging in again.`);
}
else {
    console.log('Enter a valid username');
}
