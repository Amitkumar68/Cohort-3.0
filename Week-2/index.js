const fs = require("fs");
const { resolve } = require("path");
const content = fs.readFileSync("file.txt", "utf-8");
// console.log(content);
const content2 = fs.readFileSync("file2.txt", "utf-8");
// console.log(content2);

// functional Arguments

// function Sum(a, b) {
//   return a + b;
// }
// function Sub(a, b) {
//   return a - b;
// }
// function Mul(a, b) {
//   return a * b;
// }
// function Div(a, b) {
//   if (b == 0) {
//     console.log("Not defined!");
//   }
//   return a / b;
// }

// function doOperations(a, b, operation) {
//   return operation(a, b);
// }

// const ans = doOperations(4, 5, Div);
// console.log(ans);

// Callback function

// function print(err, res) {
//   console.log(
//     "File reading is done,so calling back function print! with Content"
//   );
//   console.log(res);
// }
// fs.readFile("file.txt", "utf-8", print);
// fs.readFile("file2.txt", "utf-8", print);

// const rect = {
//   width: 10,
//   height: 20,
// };

// function area(rect) {
//   return rect.width * rect.height;
// }

// console.log(area(rect));

// // More cleaner way to  do it

// class Reactangle {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }

//   area() {
//     return this.width * this.height;
//   }
// }

// const rect1 = new Reactangle(5, 8);
// console.log(rect1.area());

// // Writing your own promises

// function random() {}

// let p = new Promise(random); // a promise suppose to return something eventually

// console.log(p);

// function Callback() {
//   console.log("Promise succeeded");
// }
// p.then(Callback);

// Call back Hell

// setTimeout(function () {
//   console.log("Hi 1 sec");
//   setTimeout(function () {
//     console.log("Hello 3 sec");
//     setTimeout(function () {
//       console.log("Its 2025");
//     }, 5000);
//   }, 3000);
// }, 1000);

// solution for callbackhell------>  Promise chaing -->syntex looks more cleaner
// function setTimeoutPromisified(duration) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, duration);
//   });
// }

// setTimeoutPromisified(1000)
//   .then(function () {
//     console.log("HI");
//     return setTimeoutPromisified(3000);
//   })
//   .then(function () {
//     console.log("3 sec");
//     return setTimeoutPromisified(5000);
//   })
//   .then(function () {
//     console.log("5 sec");
//   });

// console.log("Outside of the  promise chaning");

// using async and await for write more clener code

function setTimeoutPromisified(duration) {
  return new Promise(function (resolve) {
    setTimeout(resolve, duration);
  });
}

async function solve() {
  await setTimeoutPromisified(1000);
  console.log("Printing after 1 sec");
  await setTimeoutPromisified(3000);
  console.log("Printing after 3 sec");
  await setTimeoutPromisified(5000);
  console.log("Printing after 5 sec");
}
solve();

console.log("Runing outside of the solve function");
