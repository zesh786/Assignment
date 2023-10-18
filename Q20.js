"use strict";
// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
let rivers = ["Amazon river", "MIssissipi river", "Yangtze river", "Ob river", "Yeneisi river", "Yellow river", "Congo river", "Ravi river", "Stluj river"];
rivers.forEach((rivers, index) => {
    console.log(`${index + 1}. ${rivers}`);
});
