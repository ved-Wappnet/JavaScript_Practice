"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = {
    name: "Ved",
    age: 21,
    ispaid: true,
};
// function createuser({ name: string, ispaid: boolen }) {}
// createuser({ name: "ved", ispaid: true });
// in above function normal but bad behavior of object in below it accept the parameter that not passed
function createuser(_a) {
    var string = _a.name, boolen = _a.ispaid;
}
var newUser = { name: "ved", ispaid: true, email: "ved31@gmail.com" };
createuser(newUser); // it works we have assigned the arguments as new variable.
function createCourse() {
    return { name: "TS", price: 225 };
}
function createUser(user) {
    return { name: "", email: "", isActive: false };
}
createUser({ name: "", email: "", isActive: false });
// Exactly the same as the earlier example
function printCoord(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 100, y: 100 });
