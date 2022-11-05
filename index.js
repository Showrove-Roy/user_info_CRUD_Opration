const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("This simple crud server is running");
});

app.listen(port, () => {
  console.log(`This server running on Port: ${port}`);
});
