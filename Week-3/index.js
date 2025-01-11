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


//---------------------
// creating a todo application by cleaner

// function addTodo() {
//   const divEl = document.createElement("div");
//   const btnEl = document.createElement("button");
//   const inputData = document.querySelector("input");
//   const content = inputData.value;
//   divEl.innerHTML = content;
//   btnEl.innerHTML = "Delete Todo";

//   const divParent = document.createElement("div");
//   divParent.appendChild(divEl);
//   divParent.appendChild(btnEl);

//   document.querySelector("body").appendChild(divParent);
// }

// State and components : creating our own compnents and states

let todos = [];

function addTodo() {
  todos.push({
    title: document.querySelector("input").value,
  });
  render();
}

function deleteLastTodo() {
  todos.splice(todos.length - 1, 1); // remove the last element from the END
  render();
}

function deleteFirstTodo() {
  todos.splice(0, 1); // remove the last element from the END
  render();
}

function createTodoComponent(todo, index) {
  const div = document.createElement("div");
  const h1 = document.createElement("h1");
  const btn = document.createElement("button");
  btn.innerHTML = "Delete";
  h1.innerHTML = todo.title;
  div.append(h1);
  div.append(btn);
  div.setAttribute("onclick", "deleteTodo(" + index + ")");
  return div;
}

function deleteTodo(index) {
  todos.splice(index, 1);
  render();
}

function render() {
  document.getElementById("todos").innerHTML = "";
  for (let i = 0; i < todos.length; i++) {
    const ele = createTodoComponent(todos[i], i);
    document.querySelector("#todos").appendChild(ele);
  }
}

