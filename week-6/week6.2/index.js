const express = require("express");
const jwt = require("jsonwebtoken");
var cors = require("cors");
const JWT_SECRET = "randomName";
const app = express();
app.use(express.json());
const users = [];
app.use(cors());

// hosting froontend on same server i.e =>3000
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/signup", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  users.push({
    username: username,
    password: password,
  });
  res.json({
    messgae: "You have successfully signed up",
  });

  console.log(users);
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
      JWT_SECRET,
      { expiresIn: "7d" }
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

// assignment

// auth middleware
function auth(req, res, next) {
  const token = req.headers.token;

  if (!token) {
    return res
      .status(401)
      .send({ msg: "Token is required. Please login first!" });
  }

  try {
    const decodedUser = jwt.verify(token, JWT_SECRET);
    req.username = decodedUser.username; // Attach username to req object
    next(); // Pass control to the next middleware or route handler
  } catch (err) {
    res
      .status(401)
      .send({ msg: "Invalid or expired token. Please login again." });
  }
}

app.get("/me", auth, function (req, res) {
  const username = req.username;
  const user = users.find((u) => u.username === username);

  if (user) {
    res.send({
      username: user.username, // Avoid sending the password
    });
  } else {
    res.status(404).json({
      message: "User not found or invalid token.",
    });
  }
});
app.listen(3000, function () {
  console.log("Sever started at port 3000 ");
});
