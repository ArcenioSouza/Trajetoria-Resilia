function validaEmail(){
   var emailUsuario = prompt("Insira seu e-mail")
   var valida = false;
   while(valida === false)
   if(emailUsuario.indexOf('@') > 0 && emailUsuario.indexOf('@') < emailUsuario.indexOf('.')){
      alert("Email validado com sucesso!")
      valida = true
   }else{
      alert("Email inválido! Tente novamente.")
      emailUsuario = prompt("Insira seu e-mail")
   }
}