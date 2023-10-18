// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.


//When you try to access the element of an array by using an index which is outside the valid range of indices index error is thrown.
let myArray = ["Pakistan", "USA", "Canada", "UK", "Europe", "Salvador", "Bolivia"]
console.log(myArray[7]); //undefined- cause index is outside the valid range of indices.
console.log(myArray[3.5])//non-integer values are not allowed.

//Correction: we have to access the elements of array using te the index which is within the range of array's indices.
console.log(myArray[6]);

