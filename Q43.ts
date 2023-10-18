// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
let magician = ["Harry Houdini", "Criss Angel", "Penn and Teller", "Daynamo"];

function make_great(Array_magician: string[]){
    //copy of array (Array_magician)
    let newArray: string[] = [...Array_magician];
    //Using for loop
    for (let i = 0; i < newArray.length; i++) {
        newArray[i] = `The Great ${newArray[i]}`; 
        
    }  
    return newArray;
}
//show magician function
function show_magicians(Array_magician: string[]){
    for (let i = 0; i < Array_magician.length; i++) {
        console.log(Array_magician[i]);
    }
}
let modifiedmagicians = make_great(magician)
console.log(`Original Array:`);

show_magicians(magician);

console.log(`Modified array:`);

show_magicians(modifiedmagicians);