function linhaAsteristico(numero){
    var resultado = ''
    for(var i = 0; i <= numero; i++){
      resultado += '*'
    }
    return resultado
}

console.log(linhaAsteristico(10))

function trianguloAsterisco(numLinha){

  for(var i = 0; i<=numLinha; i++){
    var resultado = '';
    for(var j = 0; j <= i; j++){
      resultado += '*'
    }
    document.write(resultado+'<br>')
  }
}

trianguloAsterisco(20)