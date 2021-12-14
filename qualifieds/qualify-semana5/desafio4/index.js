function fizzBuzz(numero){
  let array = []

  //for para percorrer os numeros iniciando por 0 até chegar ao número passado como argumento 
  for(var i = 0; i <= numero; i++){

    //os ifs verificam as condições de cada numero segundo pede o desafio
    if(i == 0){
      array = []
    } else if(i%3 == 0 && i%5 == 0){
      array.push("FizzBuzz")
    } else if(i%3 == 0){
      array.push("Fizz")
    } else if(i%5 == 0){
        array.push("Buzz")
    } else{
      array.push(i)
    }
  }
  
  return array
}