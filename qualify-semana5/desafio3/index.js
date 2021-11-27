function arrayMaisArray(arr1, arr2) {
  let soma1 = 0
  let soma2 = 0

  //o for passa por cada item do array e soma os valores atribuindo o resultado a variavel soma1 e soma2
  for(var j = 0; j < arr2.length; j++){
    soma2 = soma2 + (arr2[j])
  }
  
  for(var i = 0; i < arr1.length; i++){
    soma1 = soma1 + (arr1[i])
  }

  
  // o retorno da função retorna a soma da soma dos dois array
  return soma2 + soma1; 
}