function linhaAsteristico(numero){
    var resultado = ''
    //aqui o for irá repetir a qtd de vezes passada como argumento e a cada repetição ele insere um * na variável
    for(var i = 0; i <= numero; i++){
      resultado += '*'
    }
    return resultado
}

console.log(linhaAsteristico(10))

function trianguloAsterisco(numLinha){
  //aqui o for irá seguir repetindo até a qtd de linhas passado como argumento
  for(var i = 0; i<=numLinha; i++){
    var resultado = '';
    //aqui o for repete a qtd de vezes referente a linha que o primeiro for está. A cada repetição ele atribui um * a variavel.
    for(var j = 0; j <= i; j++){
      resultado += '*'
    }
    //aqui é inserido no html a variável com a qtd de * referente a linha
    document.write(resultado+'<br>')
  }
}

trianguloAsterisco(20)