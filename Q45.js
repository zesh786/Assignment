"use strict";
// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
function car(manufacturer, model_name, ...options) {
    let CarInfo = Object.assign({ manufacturer,
        model_name }, options);
    return CarInfo;
}
let information1 = car("BMW", "BMW X3");
let information2 = car("Toyota", "Rav4", "Black", "Multi-link rear suspension");
console.log(information1);
console.log(information2);
