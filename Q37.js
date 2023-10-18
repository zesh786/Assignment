"use strict";
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message
function make_shirt(size = "Large", message = "I Love typescript") {
    console.log(`You have ordered a T-shirt of size ${size} with message ${message} printed on it`);
}
//Large:
make_shirt();
//Medium shirt with default message:
make_shirt("Medium");
//Small with custom message:
make_shirt("Small", "Typescript is awesome!");
