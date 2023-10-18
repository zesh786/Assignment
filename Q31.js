"use strict";
//No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// • Remove all of the usernames from your array, and make sure the correct message is printed.
const inquirer_1 = __importDefault(require("inquirer"));
let username = [];
let user = [{
        name: "Name",
        type: "string",
        message: "Enter username"
    }];
let { Name } = await inquirer_1.default.prompt(user);
if (username.length == 0) {
    console.log('We need to find new users');
}
else if (Name == username[0]) {
    console.log(`Hello ${Name}, would you like to see a status report?`);
}
else if (Name == username[1] || username[2] || username[3] || username[4]) {
    console.log(`Hello ${Name}, Thank you for logging in again.`);
}
