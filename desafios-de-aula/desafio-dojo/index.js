function encontrarPote(array, busca){
   var valorEncontrado = false
   //aqui eu verifico se existe algum item no array com o valor da busca.
   for(var i = 0; i < array.length; i++){
      if(array[i] == busca){
         console.log("Encontrado no pote 0")
         valorEncontrado = true
         break
      }
      //aqui eu verifico se tem algum item igual a busca dentro dos arrays que possam existir dentro do array principal
      for(var j = 0; j < array[i].length; j++){
         if(array[i][j] == busca){
            valorEncontrado = true
            console.log("Encontrado no pote 1")
            break
         }
      }
   }
   //caso não seja encontrado valor algum retorn a msg de não encontrado.
   if(valorEncontrado == false){
      console.log("Item não encontrado")
   }
   
}

