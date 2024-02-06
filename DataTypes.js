// DataTypes

// 1. Types of Datatypes.

// String
// Number
// Bigint
// Boolean
// Undefined
// Null
// Symbol
// Object
// NaN  --> stands for "Not-a-Number"

// 2.  you can Know the type of the variable like string , number using "typeof"

var x = 10;
var y = "Hello";
var z = true;
var obj = { name: "Alice", age: 25 };
var arr = [1, 2, 3];

console.log(typeof x); // Output: number
console.log(typeof y); // Output: string
console.log(typeof z); // Output: boolean
console.log(typeof obj); // Output: object
console.log(typeof arr); // Output: object

// Here the type of array is Object but You Can Confirm That it is a array

console.log(Array.isArray(arr)); // true
console.log(arr instanceof Array); // true

// 3.  Examples

// Undefined
let car;

// Null
var myVar = null;

// Numbers:
let length = 16;
let weight = 7.5;

// Strings:
let color = "Yellow";
let firstName = "ved";
let lastName = "panchal";

// Booleans
let x = true;
let y = false;

// BigInt
let big = BigInt("123456789012345678901234567890");

// Object:
const person = { firstName: "ved", lastName: "panchal" };

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");

console.log(car + car);
console.log(myVar); // null
console.log(firstName/length); // NaN
console.log(car); // undefined
console.log(big); // 123456789012345678901234567890n
console.log(length + firstName); // 16ved
console.log(length + weight + firstName); // 23.5ved
console.log(cars + length); // Saab,Volvo,BMW16
console.log(color + x); // Yellowtrue
console.log(length + x); // 17  cause(x = true) it converts into 1
console.log(cars + lastName); // Saab,Volvo,BMWpanchal
console.log(person + length); // [object Object]16
console.log(lastName + car); // panchalundefined
console.log(cars+cars); // Saab,Volvo,BMWSaab,Volvo,BMW
console.log(person+person); // [object Object][object Object]

