const express = require("express");
const app = express();
const port = 4001;
const path = require("path");

app.use(express.static(path.join(__dirname, "/../public")));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});
app.listen(port, () => {
  console.log(`Proxy server is running on port ${port}`);
});
