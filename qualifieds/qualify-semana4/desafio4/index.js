
function contaCarneirinhos(array1) {
  // através do método filter eu comparo os itens do array se seu valor é igual a true, se for ele guarda dentro da variável qtdTrue a quantidade de itens que foi encontrado por causa do .length colocado no final do filter.
  var qtdTrue = array1.filter((isTrue) => isTrue === true).length;
  return qtdTrue;
}
