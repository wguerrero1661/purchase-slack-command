const express = require("express");
const app= express();

app.post("/purchase" , async (req, res) => {
  console.log(req);
});

const PORT = 8000;

app.listen(PORT, () => {
  console.log("server has started");
});
