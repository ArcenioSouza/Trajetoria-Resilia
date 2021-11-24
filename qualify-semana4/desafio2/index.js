
function acumular(num) {
  var cont = 1;
  var soma = 0;
  while (cont <= num) {
    soma = soma + cont;
    cont++;
  }
  return soma;
}