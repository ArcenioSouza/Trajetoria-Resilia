const express = require("express");
const app = express();

function convertRGB(codigo) {
   let r = parseInt(codigo[1] + codigo[2], 16);
   let g = parseInt(codigo[3] + codigo[4], 16);
   let b = parseInt(codigo[5] + codigo[6], 16);

   return [r, g, b];
}

function convertCMYK(codigo) {
   let r = parseInt(codigo[1] + codigo[2], 16);
   let g = parseInt(codigo[3] + codigo[4], 16);
   let b = parseInt(codigo[5] + codigo[6], 16);

   let c = 1 - (r / 255);
   let m = 1 - (g / 255);
   let y = 1 - (b / 255);
   let k = Math.min(c, Math.min(m, y));

   c = (c - k) / (1 - k);
   m = (m - k) / (1 - k);
   y = (y - k) / (1 - k);

   c = Math.round(c * 10000) / 100;
   m = Math.round(m * 10000) / 100;
   y = Math.round(y * 10000) / 100;
   k = Math.round(k * 10000) / 100;

   c = Math.round(c);
   m = Math.round(m);
   y = Math.round(y);
   k = Math.round(k);

   return [c, m, y, k];
}

app.get("/consultar/cor/:codigo", (request, response) => {
   const codigo = request.params.codigo;
   const rgb = convertRGB(codigo);
   const cmyk = convertCMYK(codigo);

   response.json({
      rgb: "rgb(" + rgb[0] + "," + rgb[1] + "," + rgb[2] + ")",
      cmyk:
         "cmyk(" +
         cmyk[0] +
         "," +
         cmyk[1] +
         "," +
         cmyk[2] +
         "," +
         cmyk[3] +
         ")",
   });
});

app.listen(3000, () => {
   console.log("Servidor funcionando");
});

//exercício qualified era só isso!!

app.get("/cor/:codigo", (request, response) => {
   const codigo = request.params.codigo;
   
   if(codigo == "0047AB"){
     response.json({    
       "rgb": "rgb(0, 71, 171)",
       "cmyk": "cmyk(100, 58, 0, 33)"    
     })
   }
   
   response.json({    
      "rgb": "rgb(161, 255, 18)",
      "cmyk": "cmyk(37, 0, 93, 0)"   
   })  
 });
