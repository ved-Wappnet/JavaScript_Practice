// let para = document.createElement("p");
// para.innerHTML = "You Clicked the button";
// let btn = document.createElement("button");
// btn.innerText = "click me";

// document.body.appendChild(para);
// document.body.appendChild(btn);

// btn.addEventListener("click", function() {
//     if (para.style.display === "none") {
//         para.style.display = "block";
//     }
//     else {
//         para.style.display = "none";
//     }
// });

// let para = document.getElementById("datetime");
// let btn = document.getElementById("btn");

// btn.addEventListener("click", function () {
//   let currtime = new Date();
//   let formatedate = currtime.toLocaleString();

//   if ((btn.textContent = "Show date & time")) {
//     para.textContent = "current date & time : " + formatedate;
//   }
// });

// let btn = document.getElementById("btn");
// let body = document.body;
// let currentcolor = document.querySelector(".current-color");

// const randomcolorgenerate = () => {
//   let red = Math.floor(Math.random() * 256);
//   let green = Math.floor(Math.random() * 256);
//   let blue = Math.floor(Math.random() * 256);
//   let change = `rgb(${red},${green},${blue})`;
//   return change;
// };

// btn.addEventListener("click", function () {
//   let randomclr = randomcolorgenerate();
//   body.style.backgroundColor = randomclr;
//   currentcolor.textContent = randomclr;
// });

// let para = document.getElementById("showform");
// let btn = document.getElementById("btn");
// let btn2 = document.getElementById("btn2");
// let myform = document.getElementById("myform");
// let inutval = document.getElementById("input");

// btn.addEventListener("click", function () {
//   if (myform.style.display == "none") {
//     myform.style.display = "block";
//     btn.style.display = "none";
//   }
// });

// myform.addEventListener("submit", function () {
//   //   let inputval = inutval.value;
//   localStorage.setItem("message", inutval.value);
// });

// inutval.addEventListener("blur", function () {
//   localStorage.setItem("message", inutval.value);
//   setTimeout(function () {
//     alert("Focus on writing the text: " + localStorage.getItem("message"));
//   }, 0);
// });

// let h1 = document.getElementById("h1");
// let para = document.querySelector(".text");
// let btn = document.getElementById("btn");

// btn.addEventListener("click", function () {
//   if (btn.textContent === "Click me") {
//     para.classList.add("para");
//     btn.textContent = "Remove class";
//   } else {
//     para.classList.remove("para");
//     btn.textContent = "Click me";
//   }
// });

// let para = document.getElementById("showform");
// let btn = document.getElementById("btn");
// let btn2 = document.getElementById("btn2");
// let myform = document.getElementById("myform");
// let fname = document.getElementById("firstname");
// let lname = document.getElementById("lastname");

// btn.addEventListener("click", function () {
//   if (myform.style.display == "none") {
//     myform.style.display = "block";
//     btn.style.display = "none";
//     para.innerHTML = "Fill The Form"
//   }
// });

// myform.addEventListener("submit", function () {
//   let firstNameVal = fname.value;
//   let lastNameVal = lname.value;

//   localStorage.setItem( firstNameVal,lastNameVal);
//   // localStorage.setItem("lastName", lastNameVal);

//   let storedFirstName = localStorage.getItem("firstName");
//   let storedLastName = localStorage.getItem("lastName");

//   alert(`Stored first name and Last name in local storage: ${storedFirstName} ${storedLastName}`);
// });

// password strength checker

// let btn = document.getElementById("btn");
// let myform = document.getElementById("myform");
// let btn2 = document.getElementById("btn2");
// let passwordInput = document.getElementById("password");
// let passstrengthcheck = document.getElementById("passstrengthcheck");

// btn.addEventListener("click", function () {
//   if (myform.style.display == "none") {
//     myform.style.display = "block";
//     btn.style.display = "none";
//   }
// });

// myform.addEventListener("submit", function () {
//   const password = passwordInput.value;
//   const Strength = calculatePassStrength(password);

//   alert(Strength);
// });

// const calculatePassStrength = (password) => {
//   if (password.length < 8) {
//     return "Weak - Password must be at least 8 characters long";
//   }

//   return "Strong";
// };

// todo start

// const todoform = document.querySelector(".form-todo");
// const todoinput = document.querySelector(".form-todo input[type='text']");
// const todoList = document.querySelector(".todo-list");

// todoform.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const newTodotext = todoinput.value;
//   const newli = document.createElement("li");
//   const newLiInnerhtml = `
//   <span class="text">${newTodotext}</span>
//   <div class="todo-buttons">
//     <button class="todo-btn done">Done</button>
//     <button class="todo-btn remove">Remove</button>
//   </div>`;

//   newli.innerHTML = newLiInnerhtml;
//   todoList.append(newli);
//   todoinput.value = "";
// });

// todoList.addEventListener("click",(e)=>{
//   if(e.target.classList.contains("remove")){
//       const targetedli = e.target.parentNode.parentNode
//       targetedli.remove()
//   }
//   if(e.target.classList.contains("done")){
//       const  lispan = e.target.parentNode.previousElementSibling;
//       lispan.style.textDecoration = "line-through"
//   }
// })

// todo end...

const validate = (e) => {
  // e.preventdefault();
  let username = document.getElementById("username");
  let password = document.getElementById("password");

  if (username.value.trim() == "") {
    // alert("Empty username not allowed");
    document.getElementById("invalid").style.visibility = "visible";
    username.style.border = "2px solid red";
    return false;
  } else if (password.value.trim() == "") {
    alert("Empty password not allowed");
    return false;
  } else if (password.value.trim().length < 5) {
    alert("password is too Short");
    password.style.border = "2px solid red";
    return false;
  } else {
    return true;
  }
};
