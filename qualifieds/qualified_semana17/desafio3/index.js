const express = require("express");
const app = express();

app.listen(3000, () => {
   console.log("funcionando")
})

app.post("/rolar-dados/:dado/:rolagens", (request, response) => {
  let dado = parseInt(request.params.dado)
  let rolagens = parseInt(request.params.rolagens)
  let numRolagens = []
  
  for(i = 0; i < rolagens; i++){
    let num = Math.floor(Math.random() * dado);
    numRolagens.push(num)
  }
  
  response.send({
    "resultados": numRolagens
  })
  
});

module.exports = app;