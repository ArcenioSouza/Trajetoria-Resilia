
function maiorEMenor(numeros) {
  const e_num = numeros.split(" ");

  let maior = Math.max.apply(null, e_num);
  let menor = Math.min.apply(null, e_num);

  return maior.toString() + " " + menor.toString();
}