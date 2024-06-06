
/*Variables in JavaScript
Definition:
Variables are containers for storing data values. In JavaScript, you can declare a variable using var, let, or const.

Types of Variables:

var: Function-scoped variable. It can be re-declared and updated.
let: Block-scoped variable. It can be updated but not re-declared in the same block.
const: Block-scoped variable. It cannot be updated or re-declared.
*/

var x = 5;
let y = 10;
const z = 15;

x = 20; // Allowed
y = 25; // Allowed
// z = 30; // Not allowed, will throw an error



//Create a variable of type string and try to add a number to it 
var str= "Moni";
var num= 5;
console.log(str+num);
console.log(typeof str);
const obj={
    "name":"Moni",
    "age":20
}
obj.salary= "1crore";

console.log(obj);



/*
Data Types in JavaScript
JavaScript provides different data types to hold different types of values. There are two types of data types in JavaScript:

Primitive Data Types:

String
Number
Boolean
Undefined
Null
Symbol (introduced in ES6)
BigInt (introduced in ES11)

Non-Primitive Data Type:

Object

*/

// Primitive Data Types
let name = "Alice"; // String
let age = 25; // Number
let isStudent = true; // Boolean
let grade; // Undefined
let emptyValue = null; // Null

// Non-Primitive Data Type
let person = {
    firstName: "John",
    lastName: "Doe"
}; // Object

/*
Interview Questions and Answers
Q1. What is the difference between let and var?

A1:

var is function-scoped while let is block-scoped.
Variables declared with var can be re-declared and updated, while variables declared with let can be updated but not re-declared within the same scope.
Q2. What are the different data types in JavaScript?

A2:
JavaScript has seven primitive data types: String, Number, Boolean, Undefined, Null, Symbol, and BigInt. It also has one non-primitive data type: Object.

Q3. What is a closure in JavaScript?

A3:
A closure is a function that has access to its own scope, the scope of the outer function, and the global scope. It allows for data encapsulation and private data.
*/

function outerFunction() {
    let outerVariable = 'I am outside!';

    function innerFunction() {
        console.log(outerVariable); // Can access outerVariable
    }

    return innerFunction;
}

const myFunction = outerFunction();
myFunction(); // Outputs: 'I am outside!'


/*
Q4. What is the difference between == and === in JavaScript?

A4:
== is the equality operator which compares two values for equality after converting both values to a common type (type coercion). === is the strict equality operator which compares both the value and the type without performing type conversion.

 */
console.log(5 == '5'); // true (because of type coercion)
console.log(5 === '5'); // false (different types)




// Variables
let firstName = "John"; // String
const birthYear = 1990; // Number
let isEmployed = true; // Boolean
let children; // Undefined
let salary = null; // Null
let symbol = Symbol('unique'); // Symbol
let bigIntNum = BigInt(9007199254740991); // BigInt

// Object
let person1 = {
    name: firstName,
    age: 2024 - birthYear,
    isEmployed: isEmployed
};

// Functions to display data
function displayPersonInfo(person) {
    console.log(`Name: ${person.name}`);
    console.log(`Age: ${person.age}`);
    console.log(`Employed: ${person.isEmployed}`);
}

// Call the function
displayPersonInfo(person);

// Check types
console.log(typeof firstName); // string
console.log(typeof birthYear); // number
console.log(typeof isEmployed); // boolean
console.log(typeof children); // undefined
console.log(typeof salary); // object (null is of object type due to a JavaScript peculiarity)
console.log(typeof symbol); // symbol
console.log(typeof bigIntNum); // bigint



/*
Expressions and Conditions in JavaScript
Expressions
Definition:
An expression is any valid unit of code that resolves to a value. This can include:

Arithmetic Expressions: Perform mathematical operations.
String Expressions: Concatenate strings.
Logical Expressions: Evaluate to true or false.
Assignment Expressions: Assign values to variables.
Function Expressions: Define functions.
*/

// Arithmetic Expression
let sum = 5 + 10; // 15

// String Expression
let greeting = "Hello" + " " + "World!"; // "Hello World!"

// Logical Expression
let isAdult = age >= 18; // true or false

// Assignment Expression
let x = 10;

// Function Expression
const square = function(num) {
    return num * num;
};

/*
Conditions
Definition:
Conditions are used to perform different actions based on different criteria.
The primary conditional statements in JavaScript are if, else if, else, and switch.
*/

let age1 = 25;

// if, else if, else
if (age1 < 18) {
    console.log("Minor");
} else if (age1 >= 18 && age1 < 65) {
    console.log("Adult");
} else {
    console.log("Senior");
}

// switch
let day = 3;
let dayName;

switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";
}

console.log(dayName); // "Wednesday"

/*
Q2. What is a ternary operator in JavaScript?

A2:
The ternary operator is a shorthand for the if-else statement.
It takes three operands: a condition, an expression to execute if the condition is true, and an expression to execute if the condition is false.
*/
let age2 = 20;
let type = (age2 >= 18) ? "Adult" : "Minor";
console.log(type); // "Adult"

/**
 Q3. How does the switch statement work in JavaScript?

A3:
The switch statement evaluates an expression, matches the expression's value to a case clause, and executes statements associated with that case. 
If no case matches, the default clause is executed.
 */

// Function to determine the price based on age and membership
function getTicketPrice(age, isMember) {
    let price;

    if (age < 18) {
        price = 10; // Minor
    } else if (age >= 18 && age < 65) {
        price = 20; // Adult
    } else {
        price = 15; // Senior
    }

    // Apply discount for members
    price = isMember ? price * 0.8 : price; // Ternary operator for discount

    return price;
}

// Function to display ticket information
function displayTicketInfo(name, age, isMember) {
    let price = getTicketPrice(age, isMember);
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`Member: ${isMember ? "Yes" : "No"}`);
    console.log(`Ticket Price: $${price}`);
}

// Example usage
displayTicketInfo("Alice", 30, true); // Alice, 30 years old, member
displayTicketInfo("Bob", 70, false); // Bob, 70 years old, not a member
displayTicketInfo("Charlie", 15, true); // Charlie, 15 years old, member

