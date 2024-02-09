// String
let greeting: string = "Hey There !!";
greeting.toLocaleUpperCase();
console.log(greeting);

// number
let userId: number = 45455; // Explicit
let accountnum = 12; // Implicit -  automatically considerd as number

// Boolean
let isLoggedIn: boolean = true;

// any
let hero // here hero datatype any so we should avoid that in TS.

function getvalue() {
  return "hello"
}
hero = getvalue()

// Example - 2
let v: any = true;
v = "string"; // no error as it can be "any" type
Math.round(v); // no error as it can be "any" type

export {};
