function somaValor(inicio, incremento, limite){
   var soma = 0;
   var sequencia = []
   for(var i = inicio; i < limite; i += incremento){
      soma += i
      sequencia.push(i)
   }
   console.log(soma)
   return sequencia
}