const express = require("express");
const app = express();
const mysql = require("mysql");
const auth = require("./routers/authRouter");

const db = require("./DataBase");

app.use(express.json());
app.use("/", auth);

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
/* const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "new_schema2",
  multipleStatements: true,
}); */

/* con.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
}); */
/*app.get("/", (req, res) => {
   con.query("SELECT * FROM new_table", (err, result) => {
    console.log(JSON.stringify(result));
    res.send(JSON.stringify(result));
  }); 
});
*/
