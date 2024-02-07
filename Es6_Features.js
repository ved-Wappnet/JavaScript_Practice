
// Let's Comapre ES5 VS ES6 Features...

//     ------ 1. Function Declararion -----

// ES5
function sumNum(num1, num2) {
  return num1 + num2; // sum the 2 numbers
}

var multiply = function (x, y) {
  return x * y;
};

// ES6
const multiply = (x, y) => x * y;

//     ------ 2. Let and Const Declarations: -----

// var == globally Scoped , We Can Re-initialized variable
// let == Block Scoped , We Can Re-initialized variable
// const == Block Scoped , it can niether be  updated nor re-declared.

// ES5
var count = 10;
if (true) {
  var count = 20;
}
console.log(count); // Output: 20

// ES6
let count = 10;
if (true) {
  let count = 20;
  console.log(count); // Output: 20
}
console.log(count); // Output: 10

const PI = 3.14; // Do not modified value of PI cause it declare with Const means Constant.

//     ------ 3. Template Literals -----

// ES5
var name = "Ved";
var greeting = "Hello, " + name + "!"; // Output: Hello, Ved!

// ES6
const name = "Ved";
const greeting = `Hello, ${name}!`; // Output:  Hello, Ved!

//     ------ 4. Destructuring Assignment -----

// ES6
const person = { name: "Ved", age: 21 };
const { name, age } = person;
console.log(name); // Output: Ved
console.log(age); // Output: 21

//     ------ 5. Default Parameter Values -----

// ES6
function myFunction(x, y = 10) {
  // y is 10 if not passed or undefined
  return x + y;
}
console.log(myFunction(5)); // 15

// ES6
const greet = (name = "World") => `Hello, ${name}!`;
console.log(greet()); // Output: Hello, World!
console.log(greet("Ved")); // Output: Hello, John!

//     ------ 6. Rest Oprator -----

// ES6
//1
const sum = (...numbers) => numbers.reduce((acc, num) => acc + num, 0);
console.log(sum(1, 2, 3, 4)); // Output: 10

//2
function sum(...args) {
  let sum = 0;
  for (let nums of args) {
    sum += nums;
  }
  return sum;
}

let x = sum(4, 9, 16, 25, 29, 100, 66, 77);
console.log(x); // 326

//     ------ 7. Spread Oprator -----

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined); // Output: [1, 2, 3, 4, 5, 6]

//     ------ 8. Include Method -----

const num = [1, 2, 3, 4];
console.log(num.includes(1)); // false

let str = "Hello world, welcome to the universe.";
str.includes("world"); // true

//     ------ 9. startsWith and endsWith -----

let text = "Hello world, welcome to the universe.";
text.startsWith("Hello"); // Returns true

var txt = "Ved Panchal";
txt.endsWith("Panchal"); // Returns true

Array.from("ABCDEFG"); // Returns [A,B,C,D,E,F,G]

//     ------ 10. Array Keys -----

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits.keys();

let text1 = "";
for (let x of keys) {
  text += x;
}
console.log(text1);

//     ------ 11. Math methods -----

// Math.trunc(x) returns the integer part of x:
Math.trunc(4.9); // returns 4
Math.trunc(4.7); // returns 4
Math.trunc(4.4); // returns 4

// Math.sign(x) returns if x is negative, null or positive:
console.log(Math.sign(10)); // Output: 1
console.log(Math.sign(-5)); // Output: -1
console.log(Math.sign(0)); // Output: 0
console.log(Math.sign(NaN)); // Output: NaN
console.log(Math.sign("hello")); // Output: NaN

// Math.cbrt(x) returns the cube root of x:
Math.cbrt(8); // returns 2
Math.cbrt(64); // returns 4
Math.cbrt(125); // returns 5

//     ------ 12. Number methods -----

// The Number.isInteger() method returns true if the argument is an integer.
Number.isInteger(10); // returns true
Number.isInteger(10.5); // returns false

//     ------ 13. New Global Methods -----

// The global isFinite() method returns false if the argument is Infinity or NaN. Otherwise true
isFinite(10 / 0); // returns false
isFinite(10 / 1); // returns true

//The global isNaN() method returns true if the argument is NaN. Otherwise it returns false
// NaN --> Not a Number
isNaN("Hello"); // returns true
