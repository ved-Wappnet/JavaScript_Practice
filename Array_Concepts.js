// Defination -  storing a collection of multiple items under a single variable name, it is mutable

const fruits = ["banana", "apple", "peach"];
console.log(fruits); // [ 'banana', 'apple', 'peach' ]

// length
console.log(fruits.length); // 3

// Access array element and access last element
console.log(fruits[1]); // apple
console.log(fruits[fruits.length - 1]); // peach

// add element
fruits[3] = "kiwi";
console.log(fruits.length); // 4

//skip 1 index and add elements
fruits[5] = "mango";
console.log(fruits[5]); // 'mango'
console.log(Object.keys(fruits)); // [ '0', '1', '2', '3', '5' ]
console.log(fruits.length); // 6

// assign a length
fruits.length = 10;
console.log(fruits);

// Get the third element of fruits using at()
let fruit = fruits.at(2);
console.log(fruit); // peach

// using forEach loop
const colors = ["red", "yellow", "blue"];
colors[5] = "purple";
colors.forEach((item, index) => {
  console.log(`${index}: ${item}`);
});
// Output:
// 0: red
// 1: yellow
// 2: blue
// 5: purple

// Converting Array to string
console.log(fruits.toString());

// push and pop method -- it add and remove from the last
fruits.push("graps", "dragon"); // [ 'banana', 'apple', 'peach', 'graps', 'dragon' ] --> add
fruits.pop(); // [ 'banana', 'apple', 'peach', 'graps' ] --> Remove

// shift and unshift -- it add and remove from at the first
fruits.unshift("graps", "Perk"); // [ 'graps', 'Perk', 'banana', 'apple', 'peach' ] --> add
fruits.shift(); // [ 'Perk', 'banana', 'apple', 'peach' ] --> Remove

// Clone the Array -- use spread oprator
let fruits2 = [...fruits]; //let fruits2 = fruits.slice(0); // or use let fruits2 = [].concat(fruits);
fruits2.push("item1");
console.log(fruits === fruits2); // false
console.log(fruits); // [ 'banana', 'apple', 'peach' ]
console.log(fruits2); // [ 'banana', 'apple', 'peach', 'item1' ]

// Destructuring of Array
const [fruits1, fruits3] = fruits;
console.log("Fruit1 is", fruits1);
console.log("Fruit2 is", fruits3);

// Array join() Method
let fruitjoin = fruits.join("*");
console.log(fruitjoin); // banana*apple*peach

// concat() method -- Merging Two Arrays
const myconcat = ["item1", "item2", "item3"];
let fruitcon = fruits.concat(myconcat);
// let fruitcon = fruits.concat(myconcat,arr1); // to concate 3 arrays
console.log(fruitcon); // [ 'banana', 'apple', 'peach', 'item1', 'item2', 'item3' ]

// flat() method -- creates a new array with sub-array elements concatenated to a specified depth.
const myArr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const newArr = myArr.flat();
console.log(newArr);

// slice method -- slice(start,end) index -- not affect original array
console.log(fruits.slice(1, 5)); // [ 'apple', 'peach' ]
console.log(fruits.slice(-1)); // [ 'peach' ]

// Splice Method
let count = [3, 2, 6, 4, 8, 9, 1];

let section = count.splice(2, 2); //  [ 3, 2, 8, 9, 1 ] -- (start,deletecount)
let section1 = count.splice(2, 2, 2); // [ 3, 2, 2, 8, 9, 1 ] -- (start,index,replcenum)
console.log(count);

// Map method -- it return new array
let numbers = [1, 2, 3, 4, 5, 6];

const newNums = numbers.map((item, index, array) => {
  return item * item;
});
console.log(newNums); // [ 3, 4, 5, 6, 7, 8 ]

// Filter method -- takes a condtion and  it return new array
const newNums1 = numbers.filter((item, index, array) => {
  return item > 4;
});
console.log(newNums1); // [ 5, 6 ]

// Reduce method --  it return new array
const newNums2 = numbers.reduce((prev, item, index, array) => {
  return prev + item;
});
console.log(newNums2); // 21

// Some method -- return boolean , return true if some value is match the condition
const newNums3 = numbers.some((item, index, array) => {
  return item > 4;
});
console.log(newNums3); // true

// every method --  return boolean , return true if all the value is match the condition
const newNums4 = numbers.every((item, index, array) => {
  return item > 4;
});
console.log(newNums4); // false

// Find method -- return if condition match then print next element
// let numbers = [1, 2, 3, 4, 5, 6];
const newNums5 = numbers.find((item, index, array) => {
  return item > 4;
});
console.log(newNums5); // 5

// Spread oprator
let num1 = [1, 2, 3];
let num2 = [4, 5, 6, 7];
let finalValue = [...num1, ...num2]; // spread
console.log(finalValue); // [ 1, 2, 3, 4, 5, 6, 7]

// Rest oprator -- it tooks all rest of parameter
// let numbers = [1, 2, 3, 4, 5, 6];
function sum(...number) {
  return number;
}
console.log(sum(num1, num2, 5, "ved")); // [ [ 1, 2, 3 ], [ 4, 5, 6, 7 ], 5, 'ved' ]

// Fill method -- (number,index(which you wann start to replace))
const dummy = [2, 5, 1, 6];
dummy.fill(0); // [ 0, 0, 0, 0 ]
dummy.fill(0, 2); // [ 2, 5, 0, 0 ]
console.log(dummy);

// FindeIndex method -- takes a callback and return a index
const index = dummy.findIndex((item) => item === 5);
console.log(index); // 1

// Flat method -- remove a sub-array bracket
const subarr = [1, 2, [3, 4], [5, 6, 7], 8, 9];
const flatend1 = subarr.flat(); // -- flat level 1
const flatend2 = subarr.flat(2); // -- flat level 2
console.log(flatend1); // [ 1, 2, 3, 4, 5, [ 6, 7 ], 8, 9 ]
console.log(flatend2); // [ 1, 2, 3, 4, 5,6, 7 , 8, 9 ]

// Reverse method
console.log(dummy.reverse()); // [6, 1, 5, 2]

// Sort method
console.log(dummy.sort());
console.log(dummy.sort((a, b) => a - b)); // [ 1, 2, 5, 6 ]
console.log(dummy.sort((a, b) => b - a)); // [ 6, 5, 2, 1 ]


// Here Start with String Methods

// Split Method -- split(separator, limit)
let text = "How are you doing today?";
const myArray = text.split(" ");
let word = myArray[1];
console.log(myArray); // ['How', 'are', 'you', 'doing', 'today?']
console.log(word); // are

// SubStr Method
let text4 = "Hello world!";
let result1 = text4.substr(1, 4); // ello
let result2 = text4.substr(2); // llo world!

// substring Method

