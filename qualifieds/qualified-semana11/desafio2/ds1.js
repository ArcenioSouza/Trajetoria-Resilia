function encrypt(mensagem) {
  
   let msgCripto = '';
   
   for(let i = mensagem.length - 1; i >= 0 ; i--){
      console.log(mensagem[i])
     if(mensagem[i] == 'a'){
       msgCripto += '4'
     } else if(mensagem[i] == 'e'){
       msgCripto += '3'
     } else if(mensagem[i] == 'i'){
       msgCripto += '2'
     } else if(mensagem[i] == 'o'){
       msgCripto += '1'
     } else if(mensagem[i] == 'u'){
       msgCripto += '0'
     } else {
       msgCripto += mensagem[i]
     }
   };
   
   return msgCripto += 'ece'
   
 }

 const texto = encrypt('banana')
 console.log(texto)