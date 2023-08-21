const express = require("express");
const app = express();
const addDays = require("date-fns/addDays");

app.get("/", (req, res) => {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const result = addDays(new Date(year, month, day), 100);

  const after100Day = `${result.getDate()}/${
    result.getMonth() + 1
  }/${result.getFullYear()}`;

  res.send(after100Day);
});

module.exports = app;
