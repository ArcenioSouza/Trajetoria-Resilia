
function contaSorrisos(arr) {
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
