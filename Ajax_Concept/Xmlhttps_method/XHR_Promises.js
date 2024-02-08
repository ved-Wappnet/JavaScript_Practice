const URL = "https://jsonplaceholder.typicode.com/posts";

function sendRequest(method, url) {
  return new Promise((resolve, resject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.response);
      } else {
        resject(new Error("Somthing Went Wrong !!"));
      }
    };

    xhr.onerror = () => {
      resject(new Error("Somthing Going Wrong !!"));
    };

    xhr.send();
  });
}

sendRequest("GET", URL)
  .then((response) => {
    let data = JSON.parse(response);
    // console.log(data);
    return data;
  })
  .then((data) => {
    let id = data[2].id;
    return id;
  })
  .then((id) => {
    const url = `${URL}/${id}`;
    // console.log(url);
    return sendRequest("GET", url);
  })
  .then((newresponse) => {
    const newdata = JSON.parse(newresponse);
    console.log(newdata);
  })
  .catch((error) => console.log(error));
