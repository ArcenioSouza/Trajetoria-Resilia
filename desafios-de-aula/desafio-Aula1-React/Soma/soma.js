const arrayNum = [1,5,23,76,87,34,687,86,98,103,489,423,89]

function somaArray(...numeros){
   let resultado = 0;

   for(let numero of numeros){
      resultado += numero;
   }

   return resultado;
}

console.log(somaArray(...arrayNum))