function habilitaSaque(saldo, saque, tipoCliente) {
   var mensagem;
   if(saque <= saldo){
     mensagem = `valor liberado para saque`
   } else if(saque <= saldo + 100 && tipoCliente == "normal"){
     mensagem = `valor liberado - cheque especial normal habilitado`
   } else if(saque <= saldo + 300 && tipoCliente == "vip"){
     mensagem = `valor liberado - cheque especial vip habilitado`
   } else {
     mensagem = `saque negado - saldo insuficiente`
   }
   return mensagem;
 }