const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello Sadia! Node.js CI/CD application is running.");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
