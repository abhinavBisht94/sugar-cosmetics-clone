const express = require("express");
const app = express();

const mongoose = require("mongoose");
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, async () => {
  console.log("Server  Starts");
});
