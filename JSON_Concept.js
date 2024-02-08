// What is JSON?
// --> JSON stands for JavaScript Object Notation
// --> JSON is a lightweight data-interchange format
// --> JSON is plain text written in JavaScript object notation
// --> JSON is used to send data between computers
// --> JSON is based on a subset of JavaScript syntax
// --> JSON is language independent *

// JSON is commonly used for sending and receiving data in web applications, especially in APIs (Application Programming Interfaces).

const obj = {
  name: "John",
  age: 30,
  city: "New York",
  isEmployed: true,
  hobbies: ["reading", "swimming", "traveling"],
  address: {
    street: "123 Main St",
    city: "New York",
    zip: "10001",
  },
};

//  JSON.stringify -->  to convert objects into JSON.
// JSON.parse to  -->  convert JSON back into an object.

// In JSON, values must be one of the following data types:

// -> a string
// -> a number
// -> an object
// -> an array
// -> a boolean
// -> null

// In JavaScript values can be all of the above, plus any other valid JavaScript expression, including:

// -> a function
// -> a date
// -> undefined

// diffrent between to write ! important

// --> In JSON : {"name" : "Ved"}
// --> In JavaScript : {name : "Ved"}

//         ----- JSON.parse() -------

// --> A common use of JSON is to exchange data to/from a web server.
// --> When receiving data from a web server, the data is always a string.
// --> Parse the data with JSON.parse(), and the data becomes a JavaScript object.

// Example - 1
const obj1 = JSON.parse('{"name":"John", "age":30, "city":"New York"}');
console.log(obj1); // { name: 'John', age: 30, city: 'New York' }

// Example - 2
const text = '["Ford", "BMW", "Audi", "Fiat"]';
const myArr = JSON.parse(text);
console.log(myArr); // [ 'Ford', 'BMW', 'Audi', 'Fiat' ]

// Example - 3
const txt = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
const obj2 = JSON.parse(txt);
obj2.birth = new Date(obj2.birth);
console.log(obj2); // { name: 'John', birth: 1986-12-14T00:00:00.000Z, city: 'New York' }

// Example - 4
const txt1 =
  '{"name":"John", "age":"function () {return 30;}", "city":"New York"}';
const obj3 = JSON.parse(txt1);
obj3.age = eval("(" + obj3.age + ")");
console.log(obj3.age()); // 30

//          ----- JSON.stringify() -------

// --> A common use of JSON is to exchange data to/from a web server.
// --> When sending data to a web server, the data has to be a string.
// --> Convert a JavaScript object into a string with JSON.stringify().

const obj4 = { name: "John", age: 30, city: "New York" };
const myJSON = JSON.stringify(obj4);
console.log(myJSON); // {"name":"John","age":30,"city":"New York"

console.log(JSON.stringify({ x: 5, y: 6 }));
// Expected output: '{"x":5,"y":6}'

console.log(
  JSON.stringify([new Number(3), new String("false"), new Boolean(false)])
);
// Expected output: '[3,"false",false]'

console.log(JSON.stringify({ x: [10, undefined, function () {}, Symbol("")] }));
// Expected output: '{"x":[10,null,null,null]}'

console.log(JSON.stringify(new Date(2006, 0, 2, 15, 4, 5)));
// Expected output: '"2006-01-02T15:04:05.000Z"'

const arr = ["John", "Peter", "Sally", "Jane"];
const myjSON = JSON.stringify(arr);
console.log(myjSON); //  ["John","Peter","Sally","Jane"]

//  ------- Looping In Objct ------

const myJSON1 = '{"name":"John", "age":30, "car":null}';
const myObj = JSON.parse(myJSON1);

let txt2 = "";
for (const x in myObj) {
  txt2 += x + ", ";
}

console.log(txt2); // name, age, car,

//  ------- JSON Array Literals  ------

// Example - 1
myJSON2 = '["Ford", "BMW", "Fiat"]';
myArray = JSON.parse(myJSON2);
console.log(myArray); // [ 'Ford', 'BMW', 'Fiat' ]

// Example - 2
const obj5 = '{"name":"John", "age":30, "cars":["Ford", "BMW", "Fiat"]}';

const parsedObj5 = JSON.parse(obj5);
console.log(parsedObj5.cars[0]); // Output: Ford


