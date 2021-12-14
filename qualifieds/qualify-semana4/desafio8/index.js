
function maiorEMenor(numeros) {
  //aqui eu guardo na variável e_num um array com os numeros passado no argumento da função
  const e_num = numeros.split(" ");

  //aqui eu uso a função Math.max.apply para retornar o maior valor dentro do array e_num
  let maior = Math.max.apply(null, e_num);

  //aqui eu uso a função Math.min.apply para retornar o menor valor dentro do array e_num
  let menor = Math.min.apply(null, e_num);

  //para atender os requisitos do desafio eu retorno o maior e o menor numero em forma de string através do metodo toString com um " "(espaço) concatenado entre eles.
  return maior.toString() + " " + menor.toString();
}