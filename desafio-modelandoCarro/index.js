var carro = {
   cor: '',
   capacidadeTanque: 0,
   qtdCombustivel: 30,
   consumoMedio: 0,

   getCor: function(){
      return this.cor
   },
   getCapacidadeTanque: function(){
      return this.capacidadeTanque
   },
   getConsumo: function(){
      return this.consumoMedio
   },
   setCor: function(novaCor){
      this.cor = novaCor
   },
   setCapacidadeTanque: function(novaCapacidade){
      this.capacidadeTanque = novaCapacidade
   },
   setConsumo: function(novoConsumo){
      this.consumoMedio = novoConsumo
   },

   calculaKm: function(){
      var qtdKm = this.qtdCombustivel / this.consumoMedio
      return "A previsão é que rode" + qtdKm + "Km"
   },

   esvaziaTanque: function(kmRodados){
      this.qtdCombustivel = (carro.qtdCombustivel - (kmRodados/this.consumoMedio))
   }

}