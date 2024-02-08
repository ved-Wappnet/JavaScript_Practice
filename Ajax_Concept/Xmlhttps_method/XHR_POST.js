let URL = "https://jsonplaceholder.typicode.com/posts";

let xhr = new XMLHttpRequest();

const postData = {
  title: "My New Post",
  body: "This is the content of my new post.",
  userId: 1,
};

xhr.open("POST", URL);

xhr.setRequestHeader("Content-Type", "application/json");

xhr.onload = () => {
  if (xhr.status >= 200 && xhr.status < 300) {
    let data = JSON.parse(xhr.response);
    console.log(data);
  } else {
    console.log("Somthing Wronng");
  }
};

xhr.onerror = () => {
  console.log("Something Wernt Wrong !!");
};

xhr.send(JSON.stringify(postData)); // Convert object to string data
