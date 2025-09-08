const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello DevOps!");
});

module.exports = app;  // 👈 Export app only
