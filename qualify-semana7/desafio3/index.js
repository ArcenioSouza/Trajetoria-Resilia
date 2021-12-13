function fabricaDeBolas(tipoBola){
  
   return{
     tipo: tipoBola,
      
     getTipo: function(){
      return this.tipo
     },
   
     setTipo: function(newBola){
       return this.tipo = newBola
     }
   }
 }