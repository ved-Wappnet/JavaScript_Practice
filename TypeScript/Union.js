"use strict";
// Union types are used when a value can be more than a single type.
// Such as when a property would be string or number.
Object.defineProperty(exports, "__esModule", { value: true });
var score = 35;
score = 45;
score = "45";
var ved = { name: "ved", id: 335 };
ved = { username: "ved07", id: 335 };
function getdb(id) {
    console.log("db id is ".concat(id));
}
getdb(3);
getdb("3");
function getdbid(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
}
// array
var data = [1, 23, 4, 8];
var data2 = ["c", "5", "g"];
var data3 = [4, 8, "5", "g", true];
