const conn = require("./connect");

conn.connection.query("select * from tasks", (err, results) => {
  if (err) {
    console.log("error :", err);
    throw err;
  }
  results.forEach((result) => {
    console.log(result.id);
  });
});
