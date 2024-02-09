"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// String
var greeting = "Hey There !!";
greeting.toLocaleUpperCase();
console.log(greeting);
// number
var userId = 45455; // Explicit
var accountnum = 12; // Implicit -  automatically considerd as number
// Boolean
var isLoggedIn = true;
// any
var hero; // here hero datatype any so we should avoid that in TS.
function getvalue() {
    return "hello";
}
hero = getvalue();
// Example - 2
var v = true;
v = "string"; // no error as it can be "any" type
Math.round(v); // no error as it can be "any" type
