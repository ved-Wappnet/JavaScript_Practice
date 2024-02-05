// Types of JavaScript Operators

//  Arithmetic Operators (+,-,* ,/,** , %, ++ , --)
//  Assignment Operators
//  Comparison Operators
//  String Operators
//  Logical Operators
//  Bitwise Operators
//  Ternary Operators
//  Type Operators

//       -------- Examples of Arithmetic Operators --------

var result = 10 + 5;
console.log(result); // Output: 15

var result = 10 - 5;
console.log(result); // Output: 5

var result = 10 * 5;
console.log(result); // Output: 50

var result = 2 ** 3;
console.log(result); // Output: 8

var result = 10 / 5;
console.log(result); // Output: 2

var result = 10 % 3;
console.log(result); // Output: 1 (10 divided by 3 leaves a remainder of 1)

var x = 5;
x++;
console.log(x); // Output: 6

var x = 5;
x--;
console.log(x); // Output: 4

let x1 = 3;
const y1 = x1++;

console.log(x1, y1); // output: "x1:4, y1:3"

let a = 3;
const b = ++a;
console.log(a, b); // output: "a:4, b:3"

//       ------ Example of Assignment Operators --------

var x = 10;

var x = 5;
x += 3; // Equivalent to: x = x + 3;
console.log(x); // Output: 8

var x = 10;
x -= 4; // Equivalent to: x = x - 4;
console.log(x); // Output: 6

var x = 3;
x *= 2; // Equivalent to: x = x * 2;
console.log(x); // Output: 6

var x = 20;
x /= 4; // Equivalent to: x = x / 4;
console.log(x); // Output: 5

var x = 10;
x %= 3; // Equivalent to: x = x % 3;
console.log(x); // Output: 1

var x = 2;
x **= 3; // Equivalent to: x = x ** 3;
console.log(x); // Output: 8

var x = 5; // Binary: 101
x &= 3; // Binary: 011 (Bitwise AND operation)
console.log(x); // Output: 1 (Decimal value of binary 001)

var x = 5; // Binary: 101
x |= 3; // Binary: 111 (Bitwise OR operation)
console.log(x); // Output: 7 (Decimal value of binary 111)

var x = 5; // Binary: 101
x ^= 3; // Binary: 110 (Bitwise XOR operation)
console.log(x); // Output: 6 (Decimal value of binary 110)

var x = 5; // Binary: 101
x <<= 2; // Binary: 10100 (Left shift operation)
console.log(x); // Output: 20 (Decimal value of binary 10100)

var x = 20; // Binary: 10100
x >>= 2; // Binary: 00101 (Right shift operation)
console.log(x); // Output: 5 (Decimal value of binary 00101)

// ---- Comparison Operators ---

x = 5;
console.log(x == 5); // true
console.log(x == 8); // false
console.log(x == "5"); // true , cause it is not compare datatype

console.log(x === 5); // true
console.log(x === "5"); // false , cause it is a Strict Mode.

console.log(x != 8); // true

console.log(x !== 5); // false
console.log(x !== "5"); // true

console.log(x > 8); // false
console.log(x < 8); // true
console.log(x >= 8); // false
console.log(x <= 8); // true

//    ------ Logical Oprator -----

console.log(true && true); // Output: true
console.log(true && false); // Output: false
console.log(false && true); // Output: false
console.log(false && false); // Output: false

console.log(true || true); // Output: true
console.log(true || false); // Output: true
console.log(false || true); // Output: true
console.log(false || false); // Output: false

console.log(!true); // Output: false
console.log(!false); // Output: true


//    ------ Ternary Oprator -----

var age = 20;
var message = (age >= 18) ? "You are an adult" : "You are a minor";
console.log(message); // Output: "You are an adult"

