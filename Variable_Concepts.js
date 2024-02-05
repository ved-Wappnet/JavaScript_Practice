// There Are Three KeyWords in Js => let , var , const

// variables are use to store the data values.
// Rules to devlare Variable :

// 1.  Variable names must begin with a letter (a-z, A-Z) or an underscore (_) or a dollar sign ($).
// 2.  Not Allowed to Declare variable begin with the Number => Ex : 99name = "ved" , not allowed.
// 3.  Subsequent characters can be letters, digits (0-9), underscores, or dollar signs.
// 4.  Variable names are case-sensitive (myVar, MyVar, and myvar are different variables).
// 5.  Avoid using reserved keywords as variable names (var, function, if, etc.).

// valid variables

var _myVariable = 10;
var $anotherVariable = "Wappnet";
var camelCaseVariable = 42;
var MyVar = "System";
var myVar = "ved"; // diffrent myVar and MyVar

// Invalid variables

// var 2ndVariable = 20; // starting with digit
// var if = 5 ; // 'if' is reserved keywords
// var function = "test"; // 'function' is a reserved keyword
// var var = "variable";

//                    ----- KeyWords -----

// var == globally Scoped , We Can Re-initialized variable
// let == Block Scoped , We Can Re-initialized variable
// const == Block Scoped , it can niether be  updated nor re-declared.

// const a; // Throw error , must be initialized with a some value.

// 1. var vs let vs Const

// using var keyword

// 1.
var a1 = 66;
a1 = a1 + 1;
console.log(a1); // output : 67

// 2.
var x = 10;
if (x > 5) {
  var y = 20;
  console.log("Inside if block: " + y); // Output: Inside if block: 20
}
console.log("Outside if-else block: " + x); // Output: Outside if-else block: 10
console.log(y); // Output: 20

// using let  Keyword
// 1.
let a2 = 66;
a2 = a2 + 1;
console.log(a2); // output : 67

var a = 10;
if (a > 5) {
  let b = 20;
  console.log("Inside if block: " + b); // Output: Inside if block: 20
}
console.log("Outside if-else block: " + a);
console.log(b); // ReferenceError: b is not defined

// using const keyword

// 1.
const a3 = 66;
a3 = a3 + 1; // TypeError: Assignment to constant variable.

// 2.
var p = 10;
if (p > 5) {
  // 'const' requires initialization
  const q = 20;
  console.log("Inside if block: " + q); // Output: Inside if block: 20
}
console.log("Outside if-else block: " + p); // Output: Outside if-else block: 10
console.log(q); // ReferenceError: q is not defined


//               --- Hoisting ---

console.log(a);

greet();
function greet() {
  console.log("Hey There !!");
}

greet1(); // it gives a error cause Function Expression are not hoisted.
const greet1 = () => {
  console.log("Hey There !!");
};

var a; // Declaration hoisted to the top but initialization is not

let a = 9; // ReferenceError: Cannot access 'a' before initialization

