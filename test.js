// function countvalue(s) {
//     let sortvalue = s.sort();
//     let countObj = {};

//     for (let i = 0; i < sortvalue.length; i++) {
//         const current = sortvalue[i];
//         countObj[current] = (countObj[current] || 0) + 1;
//     }

//     return countObj;
// }

// console.log(countvalue(['s', 'a', 'b', 'a', 's', 'j'])); // [ s: 2, a: 2, b: 1, j: 1 ]

// function removeduplicate(num) {
//     let sortele = num.sort();
//     let dupli = [];

//     for (let i = 0; i < sortele.length; i++) {
//         if (sortele[i] !== sortele[i + 1]) {
//             dupli.push(sortele[i]);
//         }
//     }

//     return dupli;
// }

// console.log(removeduplicate([3, 1, 2, 3, 2, 1])); // Output: [1, 2, 3]

function arrayToObject(arr) {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    const char = arr[i];
    const charCode = char.charCodeAt();
    obj[charCode] = char;
  }
  return obj;
}

console.log(arrayToObject(["A", "b", "c"]));

const arr = ["John", "Doe", 50];

const keys = ["firstName", "lastName", "age"];

const person = Object.fromEntries(arr.map((val, index) => [keys[index], val]));
// console.log(person);

const countnegative = (arr) => {
  let count = arr.filter((el) => el < 0).length;
  return count;
};

// console.log(countnegative([1,-2,6,-6,2]));

const occurchar = (a, b) => {
  let spitchar = b.split(a).length - 1;
  return spitchar;
};
// console.log(occurchar('a', 'vedvedpanchal'));

let str = "vedpanchal31@gmail.com";
// console.log(str.split('@')[1]);

let newstr = str.slice(str.indexOf('@')+1)
console.log(newstr);