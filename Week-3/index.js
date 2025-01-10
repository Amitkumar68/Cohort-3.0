// function addTODO() {
//   const item = document.querySelector("input");
//   console.log(item.value);
// }

// let c = 0;
// function count() {
//   console.log("value is ", c);
//   const ele = document.querySelector("h3");
//   ele.innerHTML = c;
//   c++;
// }
// val = setInterval(count, 2000);
// console.log(val);

// deleting a element

// function deleteTodo(index) {
//   const element = document.getElementById("todo-" + index);
//   element.parentNode.removeChild(element);
// }

// // adding elements to ducuments
// let mydiv = document.createElement("div");
// mydiv.innerHTML = "This div os created with JS only";
// document.querySelector("body").appendChild(mydiv);

// let para = document.createElement("p");
// para.innerHTML = "This Para is created with JS only tooooooooo";
// document.querySelector("body").appendChild(para);

// Creating a Todo List

//adding a Todo item
let cnt = 1;
function addTodo() {
  let ele = document.createElement("p");
  ele.setAttribute("id", cnt);
  const content = document.querySelector("input");
  const data = content.value;
  ele.innerHTML =
    "<div>" +
    data +
    "</div> <button onclick='deleteTodo(" +
    cnt +
    ")'>Delete</button>";
  document.querySelector("body").appendChild(ele);
  cnt = cnt + 1;
}

//delete a todo item:
function deleteTodo(index) {
  const elem = document.getElementById(index);
  elem.parentNode.removeChild(elem);
  console.log("Todo with  deleted succesfully..");
}
