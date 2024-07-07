const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/message", (req, res) => {
  res.json({ message: "hello from server" });
});

/**app.post("/post", (req, res) => {
  console.log("connected to react");
  res.redirect("/");
}); */

const port = process.env.port || 8001;

app.listen(port, console.log(`server started on ${port}`));
