//Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
let NAMES: string[] = ["Alicia", "Linda", "Zoe Barnes", "Frank Undewood", "Francis", "Peter Russo"];
//Uisng for loop:
for(let i=0; i<NAMES.length; i++){
    const serialNumber= i+1;
    console.log(`${serialNumber}: ${NAMES[i]}`);

}
