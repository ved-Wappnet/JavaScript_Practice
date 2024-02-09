let btn1 = document.getElementById("btn1");
btn1.addEventListener("click", function () {
  const worker = new Worker("worker.js");
  worker.postMessage("start workers");
  worker.onmessage = function (e) {
      document.getElementById("output").innerHTML = e.data;
  };
});

let btn2 = document.getElementById("btn2");
btn2.addEventListener("click", function () {
  document.getElementById("hi").innerHTML += "Hi!!";
});
