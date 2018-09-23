const express = require("express");
const app= express();
const bodyParser = require("body-parser");

// allow to access post request
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.post("/purchase" , async (req, res) => {
  console.log(req.body);
  res.send("ok");
});

const PORT = 8000;

app.listen(PORT, () => {
  console.log("server has started");
});
