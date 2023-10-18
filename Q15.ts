// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

let peoples= ["Jinping", "Mao", "Zuo Enlai"];
let messg: string=", you are invited for a dinner at my place tonight."

// part A:Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

console.log(`${peoples[1]} is not coming.`);

//Part B: Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

peoples[1]= "Li Shaojing";
console.log(peoples);

//Part C: Print a second set of invitation messages, one for each person who is still in your list

for (let index = 0; index < peoples.length; index++) {
    console.log(`${peoples[index]}${messg}`);
    
}
