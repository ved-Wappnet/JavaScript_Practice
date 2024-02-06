// Functions

// 1 . Normal Function Declaration == in hoisting it works
// 2 . Expression Function ==> in hoisting it gives an error
// 3.  Arrow Function   ==>  in hoisting it gives an error

//                ------ Normal Function Declaration ------

// Example - 1
function sumNum(num1, num2) {
  return num1 + num2; // sum the 2 numbers
}
console.log(sumNum(4, 5));

// Example - 2
function findeTarget(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
      return i;
    }
  }
  return -1;
}
console.log(findeTarget([4, 5, 7, 1, 2, 3], 7));

//                  ------ Expression Function ------

// Example - 1
const isEven = function (num) {
  return num % 2 == 0;
};
console.log(isEven(4));

// Example - 2
const factorial = function (n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
};
console.log(factorial(5));

//               ------ Arrow Function ------

// Example - 1
const numbers = [1, 2, 3, 4, 5];

const doubleNumbers = numbers.map((num) => num * 2);

console.log(doubleNumbers);

// Example - 2

const person = {
  firstName: "Ved",
  lastName: "Panchal",
  age: 21,
  fullName: () => `${person.firstName} ${person.lastName}`, // Arrow function to concatenate first name and last name
  greet: () =>
    `Hello, my name is ${person.fullName()} and I am ${person.age} years old`, // Arrow function for greeting
};

console.log(person.fullName()); // Output: "Ved Panchal"
console.log(person.greet()); // Output: "Hello, my name is Ved Panchal and I am 21 years old"

// Example - 3
const loginUserMessage = (username) => {
  if (!username) {
    console.log(`please Enter userName`);
    return;
  }
  return `${username} just logged in`;
};

console.log(loginUserMessage("Ved"));
console.log(loginUserMessage());


//                 ------- Function Inside a Function -------

const app = () => {
  const myfun = () => {
    console.log("hello first functions");
  };

  const addTwo = (x, y) => {
    return x + y;
  };

  console.log("Inside Function App");
  myfun();
  console.log(addTwo(2, 3));
};

app();
