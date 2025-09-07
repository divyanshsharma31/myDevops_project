const express = require("express");
const app = express();
const PORT = 8080;

app.get("/", (req, res) => {
  res.send("Hello World! CI/CD with Docker & GitHub Actions as my DevOps project ");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
