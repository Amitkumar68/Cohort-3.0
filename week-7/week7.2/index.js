const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { z } = require("zod");
const { UserModel, TodoModel } = require("./db");
const { mongoose } = require("mongoose");
const JWT_SECRECT = "amit123";
const app = express();
app.use(express.json());
mongoose.connect(
  "mongodb+srv://amitkumar01dev:QBHiJRAjFgm3PKbz@cluster0.tf0fv.mongodb.net/todo-app-2025"
);

app.post("/signup", async function (req, res) {
  // const email = req.body.email;
  // const password = req.body.password;
  // const name = req.body.name;

  // Input validation using--------> Zod

  // step-1 defing the schema of the input
  const requiredBody = z.object({
    emai: z.string().min(5).max(50).email(),
    password: z.string().min(5).max(50),
    name: z.string().min(3).max(50),
  });

  //step-2 parsing input with safeParse() function

  const parseDataWithSuccess = requiredBody.safeParse(req.body);

  if (!parseDataWithSuccess.success) {
    res.json({
      message: "Incorrect format",
    });
    return;
  }

  let errOcuur = false;
  try {
    const hashedPassword = await bcrypt.hash(password, 5);
    console.log(hashedPassword);
    await UserModel.create({
      email: email,
      password: hashedPassword,
      name: name,
    });
  } catch (err) {
    res.status(403).json({
      message: "User already exists",
    });
    errerrOcuur = true;
  }
  if (!errOcuur) {
    res.send({
      message: "You Signup Successfully",
    });
  }
});
app.post("/signin", async function (req, res) {
  const email = req.body.email;
  const password = req.body.password;
  const user = await UserModel.findOne({
    email: email,
  });
  if (!user) {
    res.status(403).json({
      message: "User does not exist in Data Base",
    });
    return;
  }
  const matchedPassword = await bcrypt.compare(password, user.password);

  if (matchedPassword) {
    const token = jwt.sign(
      {
        id: user._id.toString(),
      },
      JWT_SECRECT
    );
    res.send({
      token: token,
    });
  } else {
    res.status(404).send({
      message: "Your credentials are not correct",
    });
    console.log(user);
  }
});

function auth(req, res, next) {
  const token = req.headers.token;
  const decodedUser = jwt.verify(token, JWT_SECRECT);
  if (decodedUser) {
    req.userId = decodedUser.id;
    next();
  } else {
    res.status(404).json({
      msg: "Incorrect Credentials",
    });
  }
}
app.post("/todo", auth, async function (req, res) {
  const userId = req.userId;
  const title = req.body.title;
  const done = req.body.done;

  await TodoModel.create({
    userId,
    title,
    done,
  });

  res.json({
    message: "Todo created",
  });
});

app.get("/todos", auth, async function (req, res) {
  const userId = req.userId;

  const todos = await TodoModel.find({
    userId,
  });

  res.json({
    todos,
  });
});

app.listen(3000);
