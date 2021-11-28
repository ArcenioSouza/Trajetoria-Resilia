function somaValor(inicio, incremento, limite){
   var soma = 0;
   var sequencia = []
   //aqui o for começa com o valor referente ao argumento inicio, repete até o valor passado como argumento limite e incrementa um valor referente ao passado como argumento de incremento.
   for(var i = inicio; i < limite; i += incremento){
      //a cada repetição é realizado a soma dos número sequenciais e inserido no array sequencia.
      soma += i
      sequencia.push(i)
   }
   console.log(soma)
   return sequencia
}