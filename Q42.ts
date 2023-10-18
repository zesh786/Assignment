// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
//declaring array:
let magician = ["Harry Houdini", "Criss Angel", "Penn and Teller", "Daynamo"];
//Function for make great:
function make_great(Arraymagician: string[]){
    for (let i = 0; i < Arraymagician.length; i++) {
        Arraymagician[i] = `The Great magician ${Arraymagician[i]}`;
    }
}
//Function for show magician:
function show_magicians(Arraymagician: string[]) {
    for (let i = 0; i < Arraymagician.length; i++) {
        console.log(Arraymagician[i]);
        
    }
}
//Calling the functions:
make_great(magician);
show_magicians(magician);