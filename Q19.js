"use strict";
let people = ["Jinping", "Mao", "Zuo Enlai"];
const mesg = [" would you mind of having a dinner with me.", ", with honour, I would like you have a dinner with me tonight.", ", I have arranged a dinner in your honour, it will be an utmost pleasure for me to have you."];
for (let index = 0; index < people.length; index++) {
    console.log(`${people[index]}${mesg[index]}`);
}
console.log(people.length);
