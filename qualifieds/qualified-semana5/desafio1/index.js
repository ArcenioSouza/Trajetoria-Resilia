function abrevNome(nome){
  //na variável iniciais primeiro eu pego a primeira letra do nome passado como argumento da função
   let iniciais = nome[0]

   //o for irá percorrer cada caracter do argumento da função e qdo achar um " "(espaço) irá atribuir a varíavel iniciais um "." + a primeira letra do próximo nome passado como argumento.
   for(var i = 0; i < nome.length; i++){
     if(nome[i] == " "){
       iniciais += "."+nome[i + 1]
     }    
   }

   //a função irá retornar os valores colocados na váriável iniciais em letras maiúsculas
   return iniciais.toUpperCase()
 }