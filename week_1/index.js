// let a = 5;
// a = 10;
// // console.log(a);
// // const b = 15;
// // b = 10;
// // console.log(b);

// // Assignment-1
// function sum(a, b) {
//   return a + b;
// }

// let ans = sum(5, 7);
// let ans2 = sum("Amit ", "kumar");
// // console.log(ans);
// // console.log(ans2);

// //Assignment 2
// function canVote(age) {
//   return age >= 18 ? true : false;
// }
// // console.log(canVote(20));
// // console.log(canVote(17));

// //Assignment-3
// function say(name, age) {
//   return "Hello " + name + " " + age;
// }
// console.log(say("Amit", 24));

// //Assignment-4

// function greet2(user) {
//   let pronoun = "";
//   if (user.gender == "Male") {
//     pronoun = "Mr";
//   } else if (user.gender == "Female") {
//     pronoun = "Mrs";
//   } else {
//     pronoun = "Others";
//   }
//   return "Hi, " + pronoun + user.name + " " + "your age is " + user.age;
// }
// user = {
//   name: "Amit",
//   age: 24,
//   gender: "Male",
// };

// console.log(greet2(user));

const fs = require("fs");
const text = fs.readFileSync("a.txt", "utf-8");
console.log(text);
