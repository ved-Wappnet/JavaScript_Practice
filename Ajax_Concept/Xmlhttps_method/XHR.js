const URL = "https://jsonplaceholder.typicode.com/posts";

const xhr = new XMLHttpRequest();
console.log(xhr);

console.log(xhr.readyState);
xhr.open("GET", URL);
console.log(xhr.readyState);

// xhr.onreadystatechange = function () {
//   //   console.log(xhr.readyState);
//   if (xhr.readyState == 4) {
//     // console.log(xhr.response);
//     let response = xhr.response
//     let data = JSON.parse(response)
//     console.log(data);
//   }
// };

// xhr.onload = function () {
//     let response = xhr.response
//     let data = JSON.parse(response)
//     console.log(data);

// };

xhr.onload = () => {
  if (xhr.status >= 200 && xhr.status < 300) {
    let data = JSON.parse(xhr.response);
    console.log(data);
  } else {
    console.log("Somthing Went Wrong !!!");
  }
};

xhr.onerror = () => {
  console.log("Somthing Going Wrong !!");
};
xhr.send();
