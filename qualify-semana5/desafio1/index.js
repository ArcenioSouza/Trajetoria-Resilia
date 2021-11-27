function abrevNome(nome){
   let iniciais = nome[0]
   for(var i = 0; i < nome.length; i++){
     if(nome[i] == " "){
       iniciais += "."+nome[i + 1]
     }    
   }
   return iniciais.toUpperCase()
 }