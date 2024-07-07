const express = require("express");
const cors = require("cors");

const app = express();
const conn = require("./connect");
var data = [];

app.use(cors());
app.use(express.json());

conn.connection.query("select * from tasks", (err, results) => {
  if (err) {
    console.log("error :", err);
    throw err;
  }
data = results
});

const port = 8001;
app.listen(port, console.log(`server started on ${port}`));

app.get("/data", (req, res) => {
  res.json(data);
  
});
