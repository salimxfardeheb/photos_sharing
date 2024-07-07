const conn = require('./connect')

conn.connection.query("select * from tasks", (err, result) => {
    if (err) throw err;
    console.log(JSON.stringify(result));
  });