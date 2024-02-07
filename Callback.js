
//  A callback in JavaScript is a function that is passed as an argument to another function
//  The purpose of a callback function is to be executed at a later time, often after the completion of an asynchronous operation, such as fetching data from a server, reading a file,


// Example - 0 

console.log("First Line of Call Back");

setTimeout(() => {
    console.log("Inside a set Time out"); // last me call hoga
}, 2000);

function introcall() {
    console.log("INTRO CALL");
}
introcall()


// Example - 1
const myFunc2 = (name) => {
  console.log("Inside Func 2");
  console.log(`your name is ${name}`);
};

const myFunc = (callback) => {
  console.log("Main Function");
  // console.log(callback);  // [Function: myFunc2]
  callback("Ved"); // Inside Func 2
};

myFunc(myFunc2);

// Output :
// Main Function
// Inside Func 2
// your name is Ved

// another Way
const CB1 = (callback) => {
  console.log("Function doing task 1");
  callback();
};

// const CB2 = () => {
//     console.log("Function doing task 2");
// }

CB1(() => {
  console.log("Function doing task 2");
});
// Function doing task 1
// Function doing task 2

// Example - 2
const getNumberAndAdd = (number1, number2, onsuccess, onfailure) => {
  if (typeof number1 === "number" && typeof number2 == "number") {
    onsuccess(number1, number2);
  } else {
    // console.log("wrong Data type");
    onfailure();
  }
};

const AddNumber = (num1, num2) => {
  console.log(num1 + num2);
};

const onfailure = () =>{
    console.log("wrong Data type");
    console.log("Plz enter right data type...");
}
getNumberAndAdd("4", 4, AddNumber , onfailure); // 8

// getNumberAndAdd("4", 4, (num1, num2) => {
//   console.log(num1 + num2); // 8
// },()=>{
//     console.log("wrong Data type");
// });
