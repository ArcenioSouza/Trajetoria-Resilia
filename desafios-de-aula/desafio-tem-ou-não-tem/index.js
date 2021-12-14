var array1 = [2,5,7]
var array2 = [3,7,4]
//retorno [2,5]

function temNaoTem(arrayNum1, arrayNum2){
   //aqui eu faço um filter que compara cada item do array1 com os do array2, qdo esse item for diferente de todos do array2 o .includes inclui esse valor na variável item que depois é retornado e atribuido a variavel array3.
   var array3 = arrayNum1.filter(item => !arrayNum2.includes(item))
   return array3
}