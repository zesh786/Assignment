"use strict";
// Seeing the World: Think of at least five places in the world you’d like to visit.
// Part A: Store the locations in a array. Make sure the array is not in alphabetical order.
let places = ["Muree", "Hercules Monument", "Umbrella waterfall", "Taj mehal", "Pentagone"];
// Part B: Print your array in its original order.
console.log(places);
// Part C: Print your array in alphabetical order without modifying the actual list.
//This can be done by using "sort()" method but it will affect original array. to get original array unaffected we have to use "slice()" method to create a shallow copy of the array. there are two optional parameters in slice "start" and "end".
// let sorted= places.sort();
// console.log(sorted);
let sorted = places.slice();
sorted.sort();
console.log(sorted);
// Part D: Show that your array is still in its original order by printing it.
console.log(places);
// Part E: Print your array in reverse alphabetical order without changing the order of the original list.
let reversed = places.slice();
reversed.reverse();
console.log(reversed);
// Part F: Show that your array is still in its original order by printing it again.
console.log(places);
// Part G: Reverse the order of your list. Print the array to show that its order has changed.
places.reverse();
console.log(places);
// Part H: Reverse the order of your list again. Print the list to show it’s back to its original order.
places.reverse();
console.log(places);
// Part I: Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
places.sort();
console.log(places);
// Part J: Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
places.sort((a, b) => {
    return b.localeCompare(a);
});
console.log(places);
