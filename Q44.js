"use strict";
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function makesandwich(sandwichItems) {
    console.log(`Sandwich summary:`);
    //
    if (sandwichItems.length === 0) {
        console.log(`You ordered an empty sandwich`);
    }
    else {
        console.log(`You have ordered sandwic with following items`);
        //using for loop to iterate through items.
        for (let i = 0; i < sandwichItems.length; i++) {
            console.log(sandwichItems[i]);
        }
    }
}
//Function call:
makesandwich(["Cheese", "Butter", "Egg", "Chicken"]);
makesandwich(["Garlic", "Cucumber", "Mayonaise", "Spread"]);
makesandwich([]);
