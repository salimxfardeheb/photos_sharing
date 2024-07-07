const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  port: "3306",
  database: "Todo_List",
  password: "salim123",
});

connection.connect(function (err) {
  if (err) console.log("error occured while connecting");
  else console.log("db connected successfully");
});


module.exports = {connection};

