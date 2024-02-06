// let user = new Object(); // {}  "object constructor" syntax
let user = {}; // "object literal" syntax

// console.log(user);

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
  city : "Ahemdabad"
};

const objClone = Object.assign({}, person);
objClone.firstName = "Ved"
objClone.lastName = "Panchal"
console.log(person,objClone);
