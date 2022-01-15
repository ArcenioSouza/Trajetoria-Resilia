function uncensor(message, key) {
   let retorno = '';
   let count = 0
   console.log(key.length)
   
   if(key == ''){
     return message
   }
   
   for(let i = 0; i < message.length; i++){
     console.log(count)
     if(message[i] == '*'){
         if(count < key.length){
           retorno += key[count]
           count++
         } else {
           retorno += message[i]
         }
     } else {
           retorno += message[i]
     }
   }
   return retorno
 }

 const retorno = uncensor('P**CISO ** *J*DA', 'RED')
 console.log(retorno)