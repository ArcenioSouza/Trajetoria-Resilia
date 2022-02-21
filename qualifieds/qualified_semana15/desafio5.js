const express = require("express");
const app = express();

app.get("/ano", (request, response) => {
  response.json({
    "data": 2022
  });
});

app.get("/mes", (request, response) => {
  response.json({
    "data": 1
  });
});

app.get("/dia", (request, response) => {
  response.json({
    "data": 1
  });
});

module.exports = app; 