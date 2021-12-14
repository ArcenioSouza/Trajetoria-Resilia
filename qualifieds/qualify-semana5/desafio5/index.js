function trianguloInvertido(numLinhas){
  let triangulo = ''
  //esse for percorre o numero de linhas passada como parâmetro até chegar a 1
  for(var i = numLinhas; i >= 1; i--){

    //esse for atribui os * a variavel triangulo até chegar o valor de i, ou seja, se i for igual a 5 ele atribui 5 * na váriável.
    for(var j = 0; j < i; j++){
      triangulo += '*'
    }

    //depois de inseridos os * na qtd certa de i aqui é atribuido um \n como pede no desafio.
    triangulo += '\n'
  }
  return triangulo
}