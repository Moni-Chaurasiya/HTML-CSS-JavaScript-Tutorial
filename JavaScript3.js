/**
 Arrays in JavaScript
Short Note
Arrays in JavaScript are ordered collections of elements that can hold multiple values of different data types. Arrays are zero-indexed, meaning the first element has an index of 0.

Key Concepts
Creation: Arrays can be created using the Array constructor or array literals.
Accessing Elements: Elements can be accessed using their index.
Methods: Arrays have various built-in methods like push, pop, shift, unshift, slice, splice, forEach, map, filter, reduce, etc.
 */

// Creating an array
let arr = [1, 2, 3, 4, 5];

// Accessing elements
console.log(arr[0]); // 1

// Adding elements
arr.push(6); // [1, 2, 3, 4, 5, 6]

// Removing elements
arr.pop(); // [1, 2, 3, 4, 5]

// Iterating over elements
arr.forEach(element => {
    console.log(element);
});

// Mapping elements to a new array
let squared = arr.map(num => num * num);
console.log(squared); // [1, 4, 9, 16, 25]

// Filtering elements
let evens = arr.filter(num => num % 2 === 0);
console.log(evens); // [2, 4]

// Reducing elements to a single value
let sum = arr.reduce((acc, num) => acc + num, 0);
console.log(sum); // 15

/*Interview Question
Q: How would you find the largest number in an array?
A:*/

let numbers = [1, 2, 3, 4, 5];
let max = Math.max(...numbers);
console.log(max); // 5

/**
 Strings in JavaScript
Short Note
Strings in JavaScript are sequences of characters used to represent text. They are immutable, meaning once created, their content cannot be changed. Strings can be enclosed in single quotes ('), double quotes ("), or backticks (`).

Key Concepts
Creation: Strings can be created using quotes or the String constructor.
Accessing Characters: Characters can be accessed using their index.
Methods: Strings have various built-in methods like charAt, concat, includes, indexOf, slice, substring, toUpperCase, toLowerCase, etc.
 */

// Creating strings
let str = "Hello, World!";

// Accessing characters
console.log(str[0]); // 'H'

// String concatenation
let greeting = "Hello";
let name = "Alice";
let message = greeting + ", " + name + "!";
console.log(message); // 'Hello, Alice!'

// String methods
console.log(str.length); // 13
console.log(str.toUpperCase()); // 'HELLO, WORLD!'
console.log(str.includes("World")); // true
console.log(str.indexOf("World")); // 7
console.log(str.slice(7, 12)); // 'World'

/**
 Interview Question
Q: How would you reverse a string?
A:
 */
function reverseString(str) {
    return str.split('').reverse().join('');
}

let reversed = reverseString("hello");
console.log(reversed); // 'olleh'

/*Detailed Concepts with Examples
Array Methods
push: Adds one or more elements to the end of an array and returns the new length.*/

let fruits = ["apple", "banana"];
fruits.push("orange");
console.log(fruits); // ["apple", "banana", "orange"]

/**
 pop: Removes the last element from an array and returns that element.
 */

 let fruit = ["apple", "banana", "orange"];
let last = fruit.pop();
console.log(last); // "orange"
console.log(fruit); // ["apple", "banana"]

/**
 shift: Removes the first element from an array and returns that element.
 */

 let fruitss = ["apple", "banana", "orange"];
let firstss = fruitss.shift();
console.log(first); // "apple"
console.log(fruitss); // ["banana", "orange"]

/*unshift: Adds one or more elements to the beginning of an array and returns the new length.*/
let frui = ["banana", "orange"];
frui.unshift("apple");
console.log(frui); // ["apple", "banana", "orange"]

/*forEach: Executes a provided function once for each array element.*/

let fruitsss = ["apple", "banana", "orange"];
fruitsss.forEach(fruit => console.log(fruit));
// Output: apple, banana, orange

/*map: Creates a new array with the results of calling a provided function on every element.*/
let number = [1, 2, 3, 4];
let doubled = number.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8]

/*filter: Creates a new array with all elements that pass the test implemented by the provided function.*/
let numb = [1, 2, 3, 4];
let even = numb.filter(num => num % 2 === 0);
console.log(even); // [2, 4]

/**
 reduce: Executes a reducer function on each element of the array, resulting in a single output value.
 */
 let n = [1, 2, 3, 4];
 let sums = n.reduce((acc, num) => acc + num, 0);
 console.log(sums); // 10

//String method
//charAt: Returns the character at a specified index.
let st = "Hello";
console.log(st.charAt(1)); // 'e'

//concat: Combines two or more strings.
let str1 = "Hello";
let str2 = "World";
console.log(str1.concat(", ", str2)); // 'Hello, World'

//includes: Checks if a string contains a specified substring.
let s = "Hello, World!";
console.log(s.includes("World")); // true

//indexOf: Returns the index of the first occurrence of a specified value.
let strr = "Hello, World!";
console.log(strr.indexOf("World")); // 7

//slice: Extracts a section of a string and returns it as a new string.
let strrr = "Hello, World!";
console.log(strrr.slice(7, 12)); // 'World'

//substring: Similar to slice, but does not accept negative indices.
let s1 = "Hello, World!";
console.log(s1.substring(7, 12)); // 'World'

//toUpperCase: Converts a string to uppercase letters.
let s2 = "Hello, World!";
console.log(s2.toUpperCase()); // 'HELLO, WORLD!'

//toLowerCase: Converts a string to lowercase letters.
let str3 = "Hello, World!";
console.log(str3.toLowerCase()); // 'hello, world!'





 
 

