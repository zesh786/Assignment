// Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
//using for loop:
const modes: string[]= ["Car", "Bike", "Helicopter"];
const msg1: string="I woud like to own a ";
const msg2: string[]= ["It reduces travel time", "It can be handled easily at crowded places", "It is an a expansive mode to travel but it can reduce the mileage of hours to minutes"];
for (let index = 0; index < modes.length; index++) {
        console.log(`${msg1}${modes[index]} ${msg2[index]}`);
    
}