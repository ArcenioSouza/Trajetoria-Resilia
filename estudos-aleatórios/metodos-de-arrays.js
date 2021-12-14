

// //MÉTODOS USADOS EM ARRAYS QUE SUBSTITUEM OS LAÇOS DE REPETIÇÃO COMO O FOR!

// let frutas = ['maçã', 'limão', 'laranja', 'pera']

// // método forEach ---> Percorre os itens do array e executa uma função, mas não retorna nada.
//                      //a função dentro do forEach pode receber dois tipos de informação, o item do array e o índice do array que ele se encontra.
// frutas.forEach(function(fruta, indice){

//    //aqui podemos fazer várias coisas com essas informações... por exemplo...

//    console.log(`A fruta ${fruta} está no índice ${indice} do array`)
//          //Resposta  // A fruta maçã está no índice 0 do array
//                      // A fruta limão está no índice 1 do array
//                      // A fruta laranja está no índice 2 do array
//                      // A fruta pera está no índice 3 do array
// })

//MÉTODOS USADOS EM ARRAYS QUE SUBSTITUEM OS LAÇOS DE REPETIÇÃO COMO O FOR!

let cores = ['azul', 'vermelho', 'laranja', 'azul', 'verde', 'azul']

// método map ---> Percorre os itens do array e executa uma função, que pode retornar uma informação.
                     //a função dentro do map pode receber dois tipos de informação, item do array e o índice do array que ele se encontra.
const qtdDeCores = cores.map(function(cor, indice){
//aqui colocamos uma variável para receber o retorno do map!!!

   //Como o método map pode retornar informações podemos fazer mais coisas do que usando o forEach, mas os dois funcionam de forma parecida.

   //Exemplo de uso com retorno:

   if (cor == 'azul'){
      return 'adoro AZUL' //aqui eu vou criar um outro array na minha variável qtdDeCores que muda as informações.
   } else {                //Ela virá transformada segundo as condições que passei dentro do if.
      return cor
   }
})

console.log(qtdDeCores) 
//resultado do console = ['adoro AZUL','vermelho','laranja','adoro AZUL','verde','adoro AZUL']

//array original: let cores = ['azul', 'vermelho', 'laranja', 'azul', 'verde', 'azul'] 
