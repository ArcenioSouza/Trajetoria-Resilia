let array = [1, 2, 3, 4]

function twosDifference(input){
   let arrayPares = []
   let numerosOrdenados = input.sort(function(a, b) {
      return a - b;
   });
     
     for(var i = 0; i < numerosOrdenados.length; i++){
      for(var j = 0; j < numerosOrdenados.length; j++){
         if(numerosOrdenados[i]+2 == numerosOrdenados[j]){
            arrayPares.push([numerosOrdenados[i], numerosOrdenados[j]])
            console.log(arrayPares)
          }
      }
       
     }

     return arrayPares
   }


 
console.log(twosDifference(array));