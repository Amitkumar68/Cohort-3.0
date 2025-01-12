const express = require("express");
const app = express();

app.use(express.json());

// function sumOfN(n) {
//   let ans = 0;
//   for (let i = 1; i <= n; i++) {
//     ans = ans + i;
//   }
//   return ans;
// }

// app.get("/", function (req, res) {
//   const n = req.query.n;
//   let ans = sumOfN(n);
//   res.send("Sum till " + n + " is " + ans);
// });

// hospital scenerio
const users = [
  {
    name: "Jonh",
    kidneys: [
      {
        healthy: false,
      },
      {
        healthy: true,
      },
      {
        healthy: true,
      },
      {
        healthy: true,
      },
    ],
  },
];

app.get("/", function (req, res) {
  const johnKedneys = users[0].kidneys;
  const numberOfKidneys = johnKedneys.length;
  let healthyKidneys = 0;
  for (let i = 0; i < johnKedneys.length; i++) {
    if (johnKedneys[i].healthy) {
      healthyKidneys++;
    }
  }
  const unHealthyKidneys = numberOfKidneys - healthyKidneys;
  res.json({
    numberOfKidneys,
    healthyKidneys,
    unHealthyKidneys,
  });
});

app.post("/", function (req, res) {
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy,
  });
  res.json({
    msg: "Done!",
  });
});

app.put("/", function (req, res) {
  for (let i = 0; i < users[0].kidneys.length; i++) {
    users[0].kidneys[i].healthy = true;
  }
  res.json({
    msg: "Updated successfully",
  });
});

app.delete("/", function (req, res) {
  let newKidneys = [];
  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (users[0].kidneys[i].healthy) {
      newKidneys.push({ healthy: true });
    }
  }
  users[0].kidneys = newKidneys;
  res.json({
    msg: "Deleted successfully",
  });
});

app.listen(3000);
