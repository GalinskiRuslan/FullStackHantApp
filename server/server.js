const express = require("express");
const app = express();
const mysql = require("mysql");

const db = require("./DataBase");

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
app.get("/", (req, res) => {
  /* con.query("SELECT * FROM new_table", (err, result) => {
    console.log(JSON.stringify(result));
    res.send(JSON.stringify(result));
  }); */
});

app.listen(3333, () => {
  console.log("Server started on port 3333");
});
