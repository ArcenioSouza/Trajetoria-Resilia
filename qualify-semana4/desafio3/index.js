
function filterArr(arr) {
  // o método filter percorre todo o array passado como argumento e compara se aquele item do array é uma string através do método typeof, caso for true ele retorna um outro array com esses valores.
  return arr.filter((array) => typeof array === "string");
}