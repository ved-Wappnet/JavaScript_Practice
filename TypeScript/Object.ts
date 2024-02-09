let user = {
  name: "Ved",
  age: 21,
  ispaid: true,
};

// function createuser({ name: string, ispaid: boolen }) {}
// createuser({ name: "ved", ispaid: true });

// in above function normal but bad behavior of object in below it accept the parameter that not passed

function createuser({ name: string, ispaid: boolen }) {}
let newUser = { name: "ved", ispaid: true, email: "ved31@gmail.com" };
createuser(newUser); // it works we have assigned the arguments as new variable.

function createCourse(): { name: string; price: number } {
  return { name: "TS", price: 225 };
}

// New Concept : Type Alias

// Example - 1
type User = {
  name: string;
  email: string;
  isActive: boolean;
};

function createUser(user: User): User {
  return { name: "", email: "", isActive: false };
}
createUser({ name: "", email: "", isActive: false });

// Example - 2
type Point = {
  x: number;
  y: number;
};

// Exactly the same as the earlier example
function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 100, y: 100 });

// new  - Object Type

const nameAgeMap: { [index: string]: number } = {};

nameAgeMap.ved = 25; // no error

//nameAgeMap.Mark = "Fifty"; // Error: Type 'string' is not assignable to type 'number'.

console.log(nameAgeMap);

export {};
