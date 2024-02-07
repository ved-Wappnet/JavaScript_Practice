const URL = "https://jsonplaceholder.typicode.com/posts";

const xhr = new XMLHttpRequest();
console.log(xhr);

console.log(xhr.readyState);
xhr.open("GET", URL);
console.log(xhr.readyState);

xhr.onreadystatechange = function () {
  console.log(xhr.readyState);
};

xhr.send();
