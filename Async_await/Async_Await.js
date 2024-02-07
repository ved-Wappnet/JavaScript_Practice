// "async and await make promises easier to write"
// async -->  makes a function return a Promise
// await -->  makes a function wait for a Promise

// Decription -- An async function declaration creates an AsyncFunction object. Each time when an async function is called, it returns a new Promise which will be resolved with the value returned by the async function, or rejected with an exception uncaught within the async function.


// settle means resolve or reject
// resolve means promise has settled successfully
// reject means promise has not settled successfully

// Exaple - 1
function resolveAfter2Seconds() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }
  
  async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
    // Expected output: "resolved"
  }
  
 asyncCall();

// Example - 2

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function greet() {
  console.log("Start greeting...");
  await delay(2000); // Wait for 2 seconds
  console.log("Hello, world!");
}

greet();



// Example - 3 

//  async function getData() {
//     // Simulate getting data from a server
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455)
//         }, 3500);
//     })
// }


// --  if you want to check below code got to async.html there i have alredy link this js file , go to the browser and open console you can see the data that is fetched.
 
async function getData() {
    // Simulate getting data from a server
    let x = await fetch('https://jsonplaceholder.typicode.com/todos')
    let data = await x.json() 
    return data
}

async function main(){

    console.log("Loading modules")
    console.log("Do something else")
    console.log("Load data")

    let data = await getData()

    console.log(data)
    console.log("process data")
    console.log("task 2")

}

main()
