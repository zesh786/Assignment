// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//Q16
let peoples= ["Jinping", "Mao", "Zuo Enlai"];

let messg: string=", you are invited for a dinner at my place tonight.";

console.log(`${peoples[1]} is not coming.`);

peoples[1]= "Li Shaojing";

console.log(peoples);

console.log(`I have found a bogger dinner table, so we should invite more giuests.`);

peoples.unshift("Alicia");
console.log(peoples);

peoples.splice(2, 0, "Zinjiang")
console.log(peoples);

peoples.push("Laoshi");
console.log(peoples);

for (let index = 0; index < peoples.length; index++) {
    console.log(`${peoples[index]}${messg}`);
    
}
// Part A: • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

console.log("We can invite only two people for dinner");

// Part B:  Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

for (let index = 5; index>1; index--) {
    console.log(`Dear ${peoples[index]} I am sorry, I can not invite you for dinner.`);
    peoples.pop();
}
console.log(peoples);

// Part C: Print a message to each of the two people still on your list, letting them know they’re still invited.

for (let index = 0; index < peoples.length; index++) {
    console.log(`Dear ${peoples[index]} You are still invited for dinner.`);
}

//Part D: Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
for (let index = 1; index >= 0; index--) {
    console.log(`Dear ${peoples[index]} I apologize, you can't come for dinner`);
    peoples.pop(); 
}
console.log(peoples);