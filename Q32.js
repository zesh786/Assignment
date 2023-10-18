"use strict";
// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// // • Make a list of five or more usernames called current_users.
Object.defineProperty(exports, "__esModule", { value: true });
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
let current_users = ["Naxisine", "John", "Meave", "Alexie", "Ellie"];
let new_users = ["Salman", "JoHn", "Ottis", "Harry", "ElLIe"];
//Creating a soft copy of arrays.
let current_upper = current_users.map(element => element.toUpperCase());
let new_uppers = new_users.map(element => element.toUpperCase());
//Using for loop to loop through arrays.
for (let i = 0; i < new_uppers.length; i++) {
    if (current_upper.includes(new_uppers[i])) {
        console.log(`Username ${new_users[i]} has already been taken. Enter a new new username.`);
    }
    else {
        console.log(`Username ${new_users[i]} is available.`);
    }
}
