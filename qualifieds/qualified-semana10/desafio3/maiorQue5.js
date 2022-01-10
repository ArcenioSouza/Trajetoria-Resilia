function maioresQue5Invertido(num) {
   let newNum = num.toString()
   let returnNumber = ''
   for(var i = 0; i < newNum.length; i++){
     if(parseInt(newNum[i]) > 5){
       returnNumber += newNum[i]
     }
   }
   
   if(returnNumber == ''){
     return returnNumber = null
   }
   
   let invertido = returnNumber.split("").reverse().join("")
   
   return parseInt(invertido)
 }

console.log(maioresQue5Invertido(4632672))