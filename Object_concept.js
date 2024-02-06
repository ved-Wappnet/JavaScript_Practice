// Objects can be created using the Object() constructor

let user = new Object(); // {} "object constructor" syntax
// let user = {};  // {} "object literal" syntax

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
  city: "Ahemdabad",
};

// Dot Notation:
console.log(person.firstName); // Output: "John"

//Bracket Notation:
console.log(person["age"]); // Output: 50

// Adding and Modifying Properties
person.gender = "Male"; // Adding a new property
person.age = 21; // Modifying an existing property

// Deleting Properties
delete person.city;

// Object.keys() -- Returns an array of a given object's own property names.
const key = Object.keys(person);
console.log(key); // [ 'firstName', 'lastName', 'age', 'eyeColor', 'gender' ]

// Object.values() --  Returns an array of a given object's own property values.
const values = Object.values(person);
console.log(values); // [ 'John', 'Doe', 21, 'blue', 'Male' ]

// Object.entries(): Returns an array of a given object's own [key, value] pairs
const entrys = Object.entries(person);
console.log(entrys);
// [[ 'firstName', 'John' ],[ 'lastName', 'Doe' ],[ 'age', 21 ],[ 'eyeColor', 'blue' ],[ 'gender', 'Male' ]]


// Object.assign() -- do not change original object
const objClone = Object.assign({}, person);
objClone.firstName = "Ved"
objClone.lastName = "Panchal"
console.log(person,objClone);


// Assign dynamic property
const property = "firstname";
const name = "Ved Panchal";

const user1 = {
  [property]: name,
};
console.log(user1); // { firstname: 'Ved Panchal' }

// get Object values using loop
for (const key in person) {
  console.log(key); // keys
  console.log(person[key]); // values
}

// Destructure the object

const person1 = {
  fullname: {
    firstName: "John",
    lastName: "Doe",
  },
  age: 50,
  eyeColor: "blue",
  city: "Ahemdabad",
};

const { age } = person1;
console.log(age); // 50
const {
  fullname: { firstName },
} = person1;
console.log(firstName); // John

// Clone the object
const objClone = Object.assign({}, person);
console.log(person,objClone);
