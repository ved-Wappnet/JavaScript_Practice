const URL = "https://jsonplaceholder.typicode.com/posts";

fetch(URL, {
  method: "POST",
  body: JSON.stringify({
    title: "foo",
    body: "bar",
    userId: 1,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });
