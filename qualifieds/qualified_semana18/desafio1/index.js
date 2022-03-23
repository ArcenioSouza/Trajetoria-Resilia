const express = require("express");
const app = express();

app.listen(3000, () => console.log("Funcionando"));

app.get("/contagem/:caracteres", (request, response) => {
   const caracteres = [...request.params.caracteres];
   const caracteresFiltrados = caracteres.filter((caracter, index) => {
      return caracteres.indexOf(caracter) === index
   })
   const contagem = [];

   for (let i = 0; i < caracteresFiltrados.length; i++) {
      let count = 0;

      for (let j = 0; j < caracteres.length; j++) {
         if (caracteresFiltrados[i] == caracteres[j]) {
            count++;
         }
      }
      contagem.push(count)
   }

   let objeto = {}

   caracteresFiltrados.forEach((caracter, index) => {
      objeto[caracter] = contagem[index]
   })

   response.status(200).json(objeto);
});
