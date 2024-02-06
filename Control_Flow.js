//            -------- return statement --------

// Example - 1
function counter() {
  // Infinite loop
  for (let count = 1; ; count++) {
    console.log(`${count}A`); // Until 5
    if (count === 5) {
      return;
    } //  --> if condition match then exit the loop
    console.log(`${count}B`); // Until 4
  }
  console.log(`${count}C`); // Never appears
}

// counter();

// Example - 2
function magic() {
  return function calc(x) {
    return x * 42;
  };
}

const answer = magic();
// console.log(answer(1337)); // 56154

//            ------ While loop ------

let n1 = 0;
let x = 0;

while (n1 < 3) {
  n1++;
  x += n1;
}

//            ------ DO While loop ------

let result = "";
let j = 0;
do {
  j++;
  result += `${j}`;
} while (j > 0 && j < 5);
// Despite i === 0 this will still loop as it starts off without the test

console.log(result);

//            ------ For loop ------
for (let k = 0; k < 9; k++) {
  console.log(k);
  // more statements
}

//            ------ For of loop ------

let fruits = ["apple", "kiwi", "bannana", "graps"];
for (const iterator of fruits) {
  // it returns the elements of array
  console.log(iterator);
}

//            ------ For in loop ------

let fruits1 = ["apple", "kiwi", "bannana", "graps"];
for (const iterator in fruits1) {
  // use for a returns the index of array
  console.log(iterator); // return index
  console.log(fruits1[iterator]); // return elements
}

//            ------ For each loop ------

const numbers = [4, 2, 6, 2];

const myFun = (number, index) => {
  console.log(`index is ${index} and number is ${number}`);
};

// for (let i = 0; i < numbers.length; i++) {
//   myFun(number[i], i);
// }

numbers.forEach(myFun);

//            ------ Break statment ------

// Example - 1
function testBreak(x) {
  // 1 , 2 ,3
  let i = 0;

  while (i < 6) {
    if (i === 3) {
      break; // if condition match then exit the loop
    }
    i += 1;
  }

  return i * x;
}

// console.log(testBreak(5));

// Example - 2 using Switch Case
const food = "sushi";

switch (food) {
  case "sushi":
    console.log("Sushi is originally from Japan.");
    break;
  case "pizza":
    console.log("Pizza is originally from Italy.");
    break;
  default:
    console.log("I have never heard of that dish.");
    break;
}

//            ----- Continue Statement ------

let i = 0;
let n = 0;

while (i < 5) {
  console.log(i);
  i++;
  console.log(i);
  if (i === 3) {
    continue;
  }

  n += i;
  console.log(n);
}

console.log(i);
console.log(n);

//            ----- If-Else Statement ------

// Example-1
function checkValue(a, b) {
  if (a === 1)
    if (b === 2) console.log("a is 1 and b is 2");
    else console.log("a is not 1");
  return;
}

// console.log(checkValue(1, 2));

// Example-2

const b = new Boolean(false);
console.log(b); // here b take as a number
if (b) {
  console.log("b is truthy"); // "b is truthy"
}

//            ----- Switch Statement ------

// Example - 1
switch (expr) {
  case "Oranges":
    console.log("Oranges are $0.59 a pound.");
    break;
  case "Apples":
    console.log("Apples are $0.32 a pound.");
    break;
  case "Bananas":
    console.log("Bananas are $0.48 a pound.");
    break;
  case "Cherries":
    console.log("Cherries are $3.00 a pound.");
    break;
  case "Mangoes":
  case "Papayas":
    console.log("Mangoes and papayas are $2.79 a pound.");
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}

console.log("Is there anything else you'd like?");

// Example - 2
const foo = 2;
let output = "Output: ";
switch (foo) {
  case 0:
    output += "So ";
  case 1:
    output += "What ";
    output += "Is ";
  case 2:
    output += "Your ";
  case 3:
    output += "Name";
  case 4:
    output += "?";
    console.log(output);
    break;
  case 5:
    output += "!";
    console.log(output);
    break;
  default:
    console.log("Please pick a number from 0 to 5!");
}

//            ----- Try And Catch ------
// in this "Finally" keyword mostly use in functions because if there is a return keyword excute it do not alloed to execute the rest of the code. to show the important msg or other we use Finally keyword.

// let a = prompt("Enter first number")
let num1 = 2;

// let b = prompt("Enter second number")
let num2 = 3;

if (isNaN(num1) || isNaN(num2)) {
  throw SyntaxError("Sorry this is not allowed");
}

let sum = parseInt(num1) + parseInt(num2);

function main() {
  let x = 1;
  try {
    console.log("The sum is ", sum * x);
    return true;
  } catch (error) {
    console.log("There is something error");
    return false;
  } finally {
    console.log("files are being closed and db connection is being closed");
  }
}

let c = main();
