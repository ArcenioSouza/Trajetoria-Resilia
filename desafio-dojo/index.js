function encontrarPote(array, busca){
   var valor = false
   for(var i = 0; i < array.length; i++){
      if(array[i] == busca){
         console.log("Encontrado no pote 0")
         valor = true
         break
      }
      for(var j = 0; j < array[i].length; j++){
         if(array[i][j] == busca){
            valor = true
            console.log("Encontrado no pote 1")
            break
         }
      }
   }
   if(valor == false){
      console.log("Item não encontrado")
   }
   
}

