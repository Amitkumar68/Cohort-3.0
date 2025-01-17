const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
app.use(express.json());

const users = [];
JWT_SECRET = "amitkumar";

app.post("/signup", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  users.push({
    username: username,
    password: password,
  });

  res.json({
    message: "You signed up successfully",
  });
});

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  const user = users.find(function (u) {
    if (u.username == username && u.password == password) {
      return true;
    } else {
      return false;
    }
  });

  if (user) {
    const token = jwt.sign(
      {
        username: username,
      },
      JWT_SECRET
    );
    // user.token = token;
    res.json({
      message: token,
    });
    console.log(users);
  } else {
    res.status(411).json({
      message: "User not found",
    });
  }
});

app.get("/me", function (req, res) {
  const token = req.headers.token;
  const decodedUser = jwt.verify(token, JWT_SECRET);
  const username = decodedUser.username;
  const user = users.find(function (u) {
    if (u.username === username) {
      return true;
    } else {
      return false;
    }
  });
  if (user) {
    res.send({
      username: user.username,
      password: user.password,
    });
  } else {
    res.json({
      message: "Invalid Token",
    });
  }
});
app.listen(3000);
