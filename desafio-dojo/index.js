function encontrarPote(array, busca){
   var valorEncontrado = false
   for(var i = 0; i < array.length; i++){
      if(array[i] == busca){
         console.log("Encontrado no pote 0")
         valorEncontrado = true
         break
      }
      for(var j = 0; j < array[i].length; j++){
         if(array[i][j] == busca){
            valorEncontrado = true
            console.log("Encontrado no pote 1")
            break
         }
      }
   }
   if(valorEncontrado == false){
      console.log("Item não encontrado")
   }
   
}

