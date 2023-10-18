"use strict";
//Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// • If the person is age 65 or older, print a message that the person is an elder.
const inquirer_1 = __importDefault(require("inquirer"));
let answers = await inquirer_1.default.prompt([{
        name: 'age',
        type: 'number',
        message: 'How old are you?',
        validate: (input) => {
            if (isNaN(input)) {
                return 'Enter a valid number';
            }
            return true;
        }
    }]);
if (answers.age < 2) {
    console.log('Person is a baby.');
}
else if (answers.age >= 2 && answers.age < 4) {
    console.log('The person is a toddler');
}
else if (answers.age >= 4 && answers.age < 13) {
    console.log('The person is a kid');
}
else if (answers.age >= 13 && answers.age < 20) {
    console.log('The person is a teenager');
}
else if (answers.age >= 20 && answers.age < 65) {
    console.log('The person is an adult');
}
else if (answers.age >= 65) {
    console.log('The person is an elder');
}
