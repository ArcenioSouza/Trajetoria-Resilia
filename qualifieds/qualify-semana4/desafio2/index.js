
function acumular(num) {
  var cont = 1;
  var soma = 0;
  //usei o while para percorrer todos os numeros a partir do 1 até o numero passado como argumento e ir atribuindo a variável soma o valor da soma de todos os cont.
  while (cont <= num) {
    soma = soma + cont;
    cont++;
  }
  return soma;
}