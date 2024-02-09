"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
    //   return "hey";
}
addTwo(5);
function getlower(val) {
    return val.toLowerCase();
}
getlower("Wappnet");
function Signup(name, email, password, ispaid) { }
Signup("Ved", "ved23@gmail.com", 123, false);
// function with defalut params
var loginUser = function (name, email, ispaid) {
    if (ispaid === void 0) { ispaid = false; }
};
loginUser("ved", "v@v.com");
var heros = ["ironman", "thor", "captain"];
heros.map(function (hero) {
    return "heros are ".concat(hero);
});
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
