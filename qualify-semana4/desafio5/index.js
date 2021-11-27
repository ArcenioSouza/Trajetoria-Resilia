
function contaSorrisos(arr) {
  // através do método filter eu comparo se nos itens do array existe os caracteres que especifiquei na função, depois de percorrer todo o array é atribuido a variável sorrisoValido a qtd de itens encontrados. 
  var sorrisoValido = arr.filter(
    (x) =>
      x == ":)" ||
      x == ":D" ||
      x == ";-D" ||
      x == ":~D" ||
      x == ":~)" ||
      x == ";~D"
  ).length;
  return sorrisoValido;
}
