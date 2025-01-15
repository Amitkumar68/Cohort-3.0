const express = require("express");

const cors = require("cors");
const app = express();

let requestCount = 0;

// function middelwareLogic(req, res, next) {
//   requestCount = requestCount + 1;
//   console.log("Total req till now are: " + requestCount);
//   next();
// }

// Assignment
// solution-1

// function middleware(req, res, next) {
//   requestCount = requestCount + 1;
//   console.log("Total is requests : " + requestCount);
//   console.log("The method is : " + req.method);
//   console.log("URL is " + req.url);
//   const timestamp = Date.now();
//   console.log("The time stamp is " + timestamp);
// }

// to resolve cors we can use
app.use(express.json());
app.use(cors());

app.post("/sum", function (req, res) {
  const a = parseInt(req.body.a);
  const b = parseInt(req.body.b);
  const ans = a + b;
  console.log(ans);
  res.json({
    ans: ans,
  });
});

// app.get("/multiply", function (req, res) {
//   const a = req.query.a;
//   const b = req.query.b;
//   res.json({
//     ans: a * b,
//   });
// });

// app.get("/divide", function (req, res) {
//   const a = req.query.a;
//   const b = req.query.b;
//   res.json({
//     ans: a / b,
//   });
// });

// app.get("/subtract", function (req, res) {
//   const a = parseInt(req.query.a);
//   const b = parseInt(req.query.b);
//   res.json({
//     ans: a - b,
//   });
// });

app.listen(3000);
