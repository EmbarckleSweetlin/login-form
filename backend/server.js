const express = require("express");
const mysql = require("mysql");

// const cors = require("cors");

const app = express();

const dbConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Embarckle@2020",
  database: "login",
});

dbConnection.connect(function (err) {
  if (err) {
    console.log(err);
    throw err;
  } else {
    console.log("connected");
  }
});
module.exports = dbConnection;
// dbConnection.connect(function () {});
// app.get("/", function (req, res) {
//   res.send("hello");
// });
app.post("/", (req, res) => {
  const userName = req.body.userName;
  const email = req.body.email;
  const password = req.body.password;
  var sql = "INSERT INTO user details(userName, email, password) Values ?";
  dbConnection.query(
    sql,
    [userName, email, password],
    function (err, result) {}
  ),
    (err, result) => {
      if (result) {
        res.send(result);
      } else {
        res.send("Enter correct value");
      }
    };
});
app.post("/", (req, res) => {});

app.listen(3001, function () {
  console.log("success");
});
