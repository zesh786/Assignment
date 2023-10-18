//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
let peoples= ["Jinping", "Mao", "Zuo Enlai"];

let messg: string=", you are invited for a dinner at my place tonight.";

console.log(`${peoples[1]} is not coming.`);

peoples[1]= "Li Shaojing";

console.log(peoples);

// Part A: Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

console.log(`I have found a bogger dinner table, so we should invite more giuests.`);

// Part B: Add one new guest to the beginning of your array.

peoples.unshift("Alicia");
console.log(peoples);

//Part C: Add one new guest to the middle of your array

peoples.splice(2, 0, "Zinjiang")
console.log(peoples);

// Part D Use append() to add one new guest to the end of your list

peoples.push("Laoshi");
console.log(peoples);

// Part E: Print a new set of invitation messages, one for each person in your list. 

for (let index = 0; index < peoples.length; index++) {
    console.log(`${peoples[index]}${messg}`);
    
}