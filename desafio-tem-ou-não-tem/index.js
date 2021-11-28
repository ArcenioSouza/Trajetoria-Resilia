var array1 = [2,5,7]
var array2 = [3,7,4]
//retorno [2,5]

function temNaoTem(arrayNum1, arrayNum2){
   var array3 = arrayNum1.filter(item => !arrayNum2.includes(item))
   return array3
}