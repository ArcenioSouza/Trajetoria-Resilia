const express = require("express");
const app = express();

app.listen(3000, () => {
   console.log("funcionando")
})


app.post("/cifrar/:mensagem/:passos", (req, res) => {
   let texto = req.params.mensagem
   let passos = parseInt(req.params.passos)
   let textCripto = "";
   let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzàèìòùáéíóúâêîôãõ?!.,/;:()@-_ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzàèìòùáéíóúâêîôãõ?!.,/;:()@-_";

   for (var i = 0; i < texto.length; i++) {
    for (var j = 0; j < alphabet.length; j++)
      if (texto[i] == alphabet[j]) {
        textCripto += alphabet[j + passos];
        break;
      } else if (texto[i] == " ") {
        textCripto += " ";
        break;
      }
   }
   console.log(textCripto)
   res.send({
      "texto": texto,
      "passos": passos,
      "resposta": textCripto
   })
});

