const express = require("express");

const app= express();

app.get("/", (req, res) => {
  res.send("Hello oficina app");
});

app.get("/budget", (req, res) => {
  res.send("Tela de orçamentos");
});

app.listen(3000, () => {
  console.log("Server up running and set to go");
});