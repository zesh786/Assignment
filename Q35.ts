// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. 
// • Modify your program to print a statement about each animal, such as A dog would make a great pet. 
// • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
let animals: string[] = ["Cat", "Dog", "Donkey"];
let messages: string[] =  [" is known for cuteness.", " would make a great pet", " is an animal used for bulky works"]
for(let i = 0; i<animals.length; i++){
    let serialnumber = i+1;
    console.log(`${serialnumber}: ${animals[i]} ${messages[i]}`);
    
}
console.log(`All these animals are pets and can be tamed. Dog would make a great pet.`);
