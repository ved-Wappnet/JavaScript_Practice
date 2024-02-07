
// In JavaScript, objects have a special hidden property [[Prototype]] (as named in the specification), that is either null or references another object.
//  That object is called “a prototype”

let a = {
  name2: "Ved",
  language: "JavaScript",
  run: () => {
    console.log("self run");
  },
};
console.log(a);

let p = {
  run: () => {
    console.log("run");
  },
};

a.__proto__ = p;

p.__proto__ = {
  name: "Jackie",
};

a.run();
console.log(a.name);

// Example - 2

let object1 = {
  name: "Ved",
  city: "Ahmedabad",
  getIntro: function () {
    console.log(this.name + "From" + this.city);
  },
};

let object2 = {
  name: "Kalp",
};

object2.__proto__ = object1;

console.log(object2.city);
object2.getIntro();
console.log(object2.name);

// Example - 3

Function.prototype.mybind = function () {
  console.log("hey buddy");
};

function f1() {
  console.log("inside the f1");
}

f1.__proto__.mybind();
f1();

console.log(f1.mybind());


// Example - 4

let animal = {  // Super-Class
  eats: true,
  walk() {
    console.log("Animal walk");
  }
};

let rabbit = {  // Sub-Class
  jumps: true,
  __proto__: animal
};

let longEar = {  // Sub-Class
  earLength: 10,
  __proto__: rabbit
};

// walk is taken from the prototype chain
longEar.walk(); // Animal walk
console.log(longEar.jumps); // true (from rabbit)
