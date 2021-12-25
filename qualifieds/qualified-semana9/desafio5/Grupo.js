class Grupo {
   constructor(npessoas){
      this.npessoas = npessoas
   }
}

function calculaNegacoes(qtdMesasA, qtdMesasB, grupos){
   let numeroNegado = 0
   grupos.forEach(element => {
      if(element.npessoas == 1 && qtdMesasA != 0){
         qtdMesasA--
      } else if(element.npessoas == 1 && qtdMesasB != 0){
         qtdMesasB--
      } else if(element.npessoas == 2 && qtdMesasB != 0) {
         qtdMesasB--
      }else {
         numeroNegado += element.npessoas
      }
      
   });
   return numeroNegado
}

const teste = calculaNegacoes(1, 2, [
   new Grupo(1),
   new Grupo(2),
   new Grupo(1),
   new Grupo(1)
 ])

console.log(teste)

