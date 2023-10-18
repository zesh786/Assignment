"use strict";
// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
const personals = ["Alicia", "Linda", "Zoe Barnes", "Frank Undewood", "Francis", "Peter Russo"];
//Uisng for loop:
for (let i = 0; i < personals.length; i++) {
    const serialNumber = i + 1;
    const greet = `Hello ${personals[i]}, hope you are doing well. I was just reminiscng about our college days and you scrossed my mind.`;
    console.log(`${serialNumber}: ${greet}`);
}
//using for of loop:
for (const personal of personals) {
    const greet = `Hey ${personal}, how was your day. I hope you beated it.`;
    console.log(greet);
}
//using forEach loop
personals.forEach((personals) => {
    console.log(`Hey ${personals}, how are you doing?`);
});
