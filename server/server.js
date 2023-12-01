const express = require("express");
const app = express();
const auth = require("./routers/authRouter");
const category = require("./routers/categoryRouter");
const vacansy = require("./routers/vacansyRouter");
const response = require("./routers/responseRouter");
const corse = require("cors");

const db = require("./DataBase");

app.use(express.json());
app.use("/files", express.static("files"));
app.use(corse({ credentials: true, origin: "http://localhost:3000" }));
app.use("/", auth, category, vacansy, response);

const serverStart = () => {
  try {
    app.listen(3333, () => {
      console.log("Server started on port 3333");
    });
  } catch (error) {
    console.log(error);
  }
};
serverStart();
