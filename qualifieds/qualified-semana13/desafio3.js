const withdraw = amount => {
   let nota100 = 0
   let nota50 = 0
   let nota20 = 0
   let valor = amount
   
   if(valor >= 100){
      nota100 = Math.floor(valor/100)
      valor = Math.floor(valor%100)
   }

   console.log(nota100, valor)

   if(valor%20 == 10 && valor != 50 && valor != 90 && valor != 70){
      nota100 -= 1
      valor += 100
   }

   console.log(nota100, valor)
   
   if(valor >= 50) {
      nota50 = Math.floor(valor/50)
      valor = Math.floor(valor%50)
   }

   console.log(nota50, valor)

   if(valor%20 == 10){
      nota50 -= 1
      valor += 50
   }

   console.log(nota50, valor)

   if(valor >= 20) {
      nota20 = Math.floor(valor/20)
      valor = Math.floor(valor%20)
   }  

   console.log(nota20, valor)
            
   let arrayNotas = [nota100, nota50, nota20]
   
   return arrayNotas
 };

 console.log(withdraw(6670))