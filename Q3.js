"use strict";
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
// let nAme: string= "Eric";
//lowerCase:
// console.log(`Hello ${nAme.toLocaleLowerCase()}, would you like to learn some python today?`);
//upperCase:
// console.log(`Hello ${nAme.toUpperCase()}, would you like to learn some python today?`);
//titleCase:
let person = "hello eric, would you like to learn some python today?";
let titleCaseString = person
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1).toLocaleLowerCase())
    .join(" ");
console.log(titleCaseString);
