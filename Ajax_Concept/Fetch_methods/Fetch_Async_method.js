let URL = "https://jsonplaceholder.typicode.com/photos";

const getposts = async () => {
  const response = await fetch(URL);
  if (!response.ok) {
    throw new Error("Something went Wrong !!");
  }
  const data = await response.json();
  //   console.log(data);
  return data;
};

getposts()
  .then((mydata) => {
    console.log(mydata);
  })
  .catch((error) => {
    console.log("inside catch");
    console.log(error);
  });
