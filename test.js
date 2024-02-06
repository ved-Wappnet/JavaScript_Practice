const numbers = [4, 2, 6, 2];

const myFun = (number, index) => {
  console.log(`index is ${index} and number is ${number}`);
};

// for (let i = 0; i < numbers.length; i++) {
//   myFun(number[i], i);
// }

numbers.forEach(myFun);
