function separa(str) {
   let maiusculos = ''
   let minusculos = ''
   
   
   for(let i = 0; i <= str.length - 1; i++){

   console.log(str[i])

     if(str[i] == str[i].toUpperCase()){
       maiusculos += str[i]
     } else {
       minusculos += str[i]
     }
   }
   
   let maiusculoEMinusculo = maiusculos + minusculos
   
   return maiusculoEMinusculo;
 }

 console.log(separa('fElIcIdAdE')); // Retorna 'EIIAEflcdd'