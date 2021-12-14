function cachorroFactory(nome, peso, raca){
   return{
      nome, // == nome:nome
      peso,
      raca,
      latir: function() {
         return this.nome + ": auau"
      },
      rosnar(){
         return this.nome + ": grrrr"
      }
   }
}