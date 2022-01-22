function removeMinimum(numbers) {
   let menorNumero = Math.min.apply(Math, numbers)
   let posicao = numbers.indexOf(menorNumero)

   return numbers.filter((numero, indice) => indice != posicao ? true : false)

 }

 console.log(removeMinimum([20,20,19,20,19]))