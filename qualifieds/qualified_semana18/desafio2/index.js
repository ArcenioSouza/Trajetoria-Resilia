const express = require("express");
const app = express();

function segundosParaHora(seg) {
        let horas = Math.floor(seg/(60*60));

        let resto = seg % (60*60);
        let minutos = Math.floor(resto/60);

        resto %= 60;
        let segundos = Math.ceil(resto);

        let hora = {
            "horas": horas,
            "minutos": minutos,
            "segundos": segundos
        };
  
        return hora;
}

app.get("/segundos/:tempo", (request, response) => {
  const tempo = request.params.tempo;
  
  const retorno = segundosParaHora(tempo);
  
  response.status(200).json(retorno);
});

module.exports = app; 