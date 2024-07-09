const express = require("express");
const cors = require("cors");
const body_parser = require("body-parser");

const app = express();
const conn = require("./connect");
var data = [];

app.use(cors());
app.use(express.json());
app.use(body_parser.urlencoded({ extended: true }));
app.use(body_parser.json());

conn.connection.query("select * from tasks", (err, results) => {
  if (err) {
    console.log("error :", err);
    if (err) {
      console.log(err);
      throw err;
    }
  }
  data = results;
});

app.post("/send-data", (req, res) => {
  const { task } = req.body;
  console.log(task);
  const completed = false;
  const request = `insert into tasks (description, completed) values (? , ? );`;
  conn.connection.query(request, [task, completed], (err, rseult) => {
    if (err) {
      console.log("error :", err);
      res.status(500).send("error inserting data ");
    }
    res.status(200).send("data inserted successfully");
  });
});

app.get("/data", (req, res) => {
  res.json(data);
});

const port = 8001;
app.listen(port, console.log(`server started on ${port}`));
