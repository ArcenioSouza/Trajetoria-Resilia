
function areaOuPerimetro(base, altura) {
  //se a base for igual a altura é um quadrado então só multiplicar os dois argumentos
  if (base == altura) {
    return base * altura;

  //caso contrário é um triangulo e para calcular o perímetro é só somar a base com a altura e multiplicar por 2
  } else {
    return 2 * (base + altura);
  }
}
