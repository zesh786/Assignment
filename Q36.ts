// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
import inquirer from "inquirer";

function make_Shirt(size: string, message: string) {
    console.log(`You have ordered a ${size}-sized T-Shirt with message printed ${message} on it`);
    
}
make_Shirt("Large", "I Love Pakistan");
