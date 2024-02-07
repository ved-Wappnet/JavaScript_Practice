// a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

// closure - Function can return the function.

// Exaple - 1
{
  let message = "Hello"; // only visible in this block
  console.log(message); // Hello
}

// console.log(message); // Error: message is not defined

// Example - 2
if (true) {
  let phrase = "Hello!";

  console.log(phrase); // Hello!
}

// console.log(phrase); // Error, no such variable!

// Example - 3
for (let i = 0; i < 3; i++) {
  // the variable i is only visible inside this for
  console.log(i); // 0, then 1, then 2
}

// console.log(i);

// Example - 4
const printFullName = (fname, lname) => {
  const printname = () => {
    console.log(fname, lname);
  };
  return printname;
};

let ans = printFullName("ved", "panchal");
// console.log(ans); // return the printname function
ans(); // ved panchal

// Example - 5

function hello(x) {
  const a = "varA";
  const b = "varB";
  return function () {
    console.log(a, b, x);
  };
}

const ans1 = hello("arg");
const b = "varB";
ans1(); // varA  varB arg

// Example - 6

function myfunction(power) {
  return function sqaure(number) {
    return number ** power;
  };
}

const cube = myfunction(3);
const result = cube(2);
console.log(result); // 8

// Example - 7

function func() {
  let counter = 0;
  return function () {
    if (counter < 1) {
      console.log("Hi you called Me !");
      counter++;
    } else {
      console.log("you alredy Called Me !!");
    }
  };
}

const myFunc = func();
myFunc()
myFunc()
