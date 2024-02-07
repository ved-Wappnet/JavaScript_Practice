// A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason.
// the asynchronous method returns a promise to supply the value at some point in the future.

// - pending: initial state, neither fulfilled nor rejected.
// - fulfilled: meaning that the operation was completed successfully.
// - rejected: meaning that the operation failed.

// -- then() method always return promise

let promise = new Promise(function (resolve, reject) {
  // Code
});

// Example - 1

const bucket = ["vegetable", "coffee", "chips", "salt", "rice"];

const FriedRicePromise = new Promise((resolve, reject) => {
  if (
    bucket.includes("vegetable") &&
    bucket.includes("salt") &&
    bucket.includes("rice")
  ) {
    resolve("Fullfilled Promise");
  } else {
    reject("Could not do it !!!");
  }
});

FriedRicePromise.then((myfriedrice) => {
  console.log("lets eat", myfriedrice);
}).catch((error) => {
  console.log(error);
});

// Example - 2 --> promise reslove and promise chaining

function mypromise() {
  return new Promise((resolve, reject) => {
    resolve("foo");
  });
}
mypromise()
  .then((value) => {
    console.log(value);
    value += "bar";
    return value;
  })
  .then((value) => {
    console.log(value);
    value += "bazz";
    return value;
  }).then((value) => {
    console.log(value);
  });
  
