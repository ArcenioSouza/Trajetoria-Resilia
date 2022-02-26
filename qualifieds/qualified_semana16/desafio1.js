const express = require("express");
const app = express();

app.get("/consultar/:id", (request, response) => {
  if(request.params.id == 370){
    response.json({
    "sigla": "LT"
    });
  }
  response.json({
    "sigla": "BR"
  });
});

module.exports = app; 