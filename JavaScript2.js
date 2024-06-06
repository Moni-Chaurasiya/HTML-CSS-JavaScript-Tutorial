/**
 Loops in JavaScript
Definition:
Loops are used to repeat a block of code as long as a specified condition is met. JavaScript supports several types of loops:

for Loop:

Syntax: for (initialization; condition; increment/decrement) { // code to be executed }
 */
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
    
 /**
 while Loop:

Syntax: while (condition) { // code to be executed } 
 */   
    let j = 0;
    while (j < 5) {
        console.log(j);
        j++;
    }
    
 /**
  do...while Loop:

Syntax: do { // code to be executed } while (condition);
  */   

let k = 0;
do {
    console.log(k);
    k++;
} while (k < 5);

/**
 for...in Loop:

Used for iterating over the properties of an object.
Syntax: for (key in object) { // code to be executed }
 */

const person = {name: "Alice", age: 25, city: "Wonderland"};
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

/**
 for...of Loop:

Used for iterating over iterable objects (like arrays, strings, etc.).
Syntax: for (element of iterable) { // code to be executed }
 */

    const arr = [1, 2, 3, 4, 5];
    for (let num of arr) {
        console.log(num);
    }
       
/**
 Functions in JavaScript
Definition:
Functions are reusable blocks of code that perform a specific task. They help in modularizing and organizing code.

Types of Functions:

Function Declaration:

Syntax: function functionName(parameters) { // code to be executed }
 */
    function greetss(name) {
        return `Hello, ${name}!`;
    }
    console.log(greetss("Alice")); // Outputs: Hello, Alice!
    
/**
 Function Expression:

Syntax: const functionName = function(parameters) { // code to be executed };
 */

    const greets = function(name) {
        return `Hello, ${name}!`;
    };
    console.log(greets("Bob")); // Outputs: Hello, Bob!
      
/**
 Arrow Functions (introduced in ES6):

Syntax: const functionName = (parameters) => { // code to be executed };
 */

    const greet = (name) => `Hello, ${name}!`;
console.log(greet("Charlie")); // Outputs: Hello, Charlie!

/**
 Interview Questions and Answers
Q1. What is the difference between for...in and for...of loops in JavaScript?

A1:

for...in is used to iterate over the properties of an object.
for...of is used to iterate over the values of an iterable object (e.g., arrays, strings).
Q2. How does the while loop differ from the do...while loop?

A2:

In a while loop, the condition is checked before executing the loop's body.
In a do...while loop, the loop's body is executed at least once before the condition is checked.
Q3. What are arrow functions and how do they differ from regular functions?

A3:

Arrow functions have a shorter syntax and do not have their own this, arguments, super, or new.target.
They are best suited for non-method functions.
 */

// Function to calculate the factorial of a number using a for loop
function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Function to calculate the sum of an array using a while loop
function sumArray(arr) {
    let sum = 0;
    let i = 0;
    while (i < arr.length) {
        sum += arr[i];
        i++;
    }
    return sum;
}

// Function to display properties of an object using a for...in loop
function displayObjectProperties(obj) {
    for (let key in obj) {
        console.log(`${key}: ${obj[key]}`);
    }
}

// Function to print each element of an array using a for...of loop
function printArrayElements(arr) {
    for (let element of arr) {
        console.log(element);
    }
}

// Example usage
console.log("Factorial of 5:", factorial(5)); // Outputs: 120
console.log("Sum of array [1, 2, 3, 4, 5]:", sumArray([1, 2, 3, 4, 5])); // Outputs: 15

const person1 = {name: "Alice", age: 25, city: "Wonderland"};
console.log("Object properties:");
displayObjectProperties(person1);

const numbers = [1, 2, 3, 4, 5];
console.log("Array elements:");
printArrayElements(numbers);


//Write a program to print the mark of a student in an object using for loop 
var obj={
    Moni:20,
    Soni:18,
    Avanish:19
}
for(let mark in obj){
    console.log(`${mark}:${obj[mark]}`);
}
const keys=Object.keys(obj);
for(let i=0;i<keys.length;i++){
    const key=keys[i];
    const value= obj[key];
    console.log(`${key}:${value}`);
}

//Write a program to print "try again " until user enter correct number 

//Taking Input From User
//Using Readline module
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const correctNumber = 5;

function askForNumber() {
    rl.question("Please enter a number: ", function(input) {
        const num = Number(input);
        if (num !== correctNumber) {
            console.log("Try again");
            askForNumber(); // Ask again recursively
        } else {
            console.log("You entered the correct number!");
            rl.close();
        }
    });
}

askForNumber();


function calAverage(arr){

    let sum=0;
    
    for (let i=0;i<num.length;i++) {
        sum+=num[i];
    }

    let average = sum/arr.length;
    return average;

}

var num= [1,2,3,4,5];
 console.log(calAverage(num));
console.log(sumArray([1, 2, 3, 4, 5]));


