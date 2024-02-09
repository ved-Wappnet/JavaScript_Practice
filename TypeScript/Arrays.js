"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var names = [];
names.push("Dylan"); // no error
// names.push(3); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.
var num = [1, 2, 3, 4];
num.push(7);
// another concept in Array
// Readonly : The readonly keyword can prevent arrays from being changed.
var name = ["ved"];
