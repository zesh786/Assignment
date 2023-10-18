//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// A-Tests for equality and inequality with strings:
let str1: string = "Hello, I am from batch 47.";
let str2: string = "Hello, i am from Batch-47.";
// Case-1 (false):

console.log(`Is str1 == str2? I predict false`);
console.log(str1==str2);
//Case-2 (true):

console.log(`Is str1 != str2? I predict true`);
console.log(str1 != str2);

//B-Tests using the lower case function:
let a1: string = "DO YOU LIKE POLITICS?";
let a2: string = "do you like politics?";
// Case-1 (false):

console.log(a1.toLowerCase() != a2.toLowerCase());
// Case-2 (true):
console.log(a1.toLowerCase() == a2.toLowerCase());

// C-Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let num1: number = 24;
let num2: number = 45;
//Equality Operator:
console.log(num1 == num2);
//Inequality operator:
console.log(num1 != num2);
// Greater than:
console.log(num1>num2);
//Less than:
console.log(num1<num2);
//Greater than and equal to:
console.log(num1>=num2);
//Less than equal to:
console.log(num1<=num2);

// D-Tests using "and" and "or" operators
let a = 23;
let b = 25;
let c = 30;
// and operator:

console.log(a<=b && a<c);
//or operator:

console.log(b==a || b>=c);

//E- Test whether an item is in a array: 
// 1-Using Array.includes() method:
let alphabets: string[]=["A", "B", "D", "E", "F"];
let tofind = "A";
if(alphabets.includes(tofind)){
    console.log(`${tofind} is in the array`);
}else{
    console.log(`${tofind} is not in the array`);
}

//2-Using array.indexOf() method:
let toFind = "E";
if(alphabets.indexOf(toFind) !== -1){
    console.log(`${toFind} is in the array`);
}else{
    console.log(`${toFind} is not in the array`);
}

//F- Test whether an item is not in a array:
//Using Array.find method:
let numbers: number[]= [1, 2, 4, 5, 7, 8, 10];
let missing = 6;
let findItem = numbers.find((item) => item === missing);
if (findItem !== undefined) {
    console.log(`${missing} is in the array`);
}else{
    console.log(`${missing} is not in the array`);

}
