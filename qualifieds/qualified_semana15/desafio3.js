/* A função recebe um array com alguns numeros. Todos os números são iguais, exceto um. Tente achá-lo.

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
É garantido que o array tenha pelo menos 3 números.

Os testem contém arrays muito grandes, então, pense sobre performace. */

function findUniq(arr) {
   /*  let numeroInicial = arr[0]
   let numeroDiferente = 0
   
   arr.forEach((numero) => {
     if(numero != numeroInicial){
       return numeroDiferente = numero
     }
   })

   numeroDiferente = arr.find((numero) => numero != numeroInicial)

   if(numeroDiferente === 1){
      numeroDiferente = 0
   }

   return numeroDiferente*/

   /* let resultado;
   arr.forEach((value) => {
      let array = [];
      arr.map((x) => {
         if (x === value) {
            array.push(x);
         }
      });
      if (array.length === 1) {
         resultado = array[0];
      }
   }); */

   let separado2 = [];
   let separado1 = [];
   arr.forEach((value) => {
     if(value == arr[0]){
       separado1.push(value)
     } else {
       separado2.push(value)
     }
   })

   let resultado = 0

   if(separado1.length == 1){
      resultado = separado1[0]
   } else {
      resultado = separado2[0]
   }
   
   return resultado;
}

console.log(findUniq([0, 1, 1, 1, 1]));
