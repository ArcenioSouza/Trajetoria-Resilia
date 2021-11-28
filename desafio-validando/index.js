function validaEmail(){
   var valida = false;
   //o while repete até que o valor dentro da variavel emailUsuario passe pela validação.
   while(valida === false)
   var emailUsuario = prompt("Insira seu e-mail")
   //esse if verifica se existe um @ dentro da variável e depois se existe um . depois do @
   if(emailUsuario.indexOf('@') > 0 && emailUsuario.indexOf('@') < emailUsuario.indexOf('.')){
      alert("Email validado com sucesso!")
      valida = true
   }else{
      alert("Email inválido! Tente novamente.")
   }
}

function validaCpf(){
   var valida = false
   while(valida === false){
      var cpfUsuario = prompt("insira seu CPF")
      var cpfSemPonto = cpfUsuario.replaceAll(".", "")
      var cpfSemTraco = cpfSemPonto.replaceAll("-", "")

      if(cpfSemTraco.length == 11){
         valida = true
         alert("CPF validado com sucesso")
         console.log(cpfSemTraco)
      } else{
         alert("CPF inválido")
      }      
   }
   
}