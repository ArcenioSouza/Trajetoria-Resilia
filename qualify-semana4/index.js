// //-------------Desafios semana 4----------------------------

// //qualify 1
// function areaOuPerimetro(base, altura) {
//   if (base == altura) {
//     return base * altura;
//   } else {
//     return 2 * (base + altura);
//   }
// }

// //qualify 2
// function acumular(num) {
//   var cont = 1;
//   var soma = 0;
//   while (cont <= num) {
//     soma = soma + cont;
//     cont++;
//   }
//   return soma;
// }

// //qualify 3
// function filterArr(arr) {
//   return arr.filter((array) => typeof array === "number");
// }

// //qualify 4
// function contaCarneirinhos(array1) {
//   var qtdTrue = array1.filter((isTrue) => isTrue === true).length;
//   return qtdTrue;
// }

// //qualify 5
// function contaSorrisos(arr) {
//   var sorrisoValido = arr.filter(
//     (x) =>
//       x == ":)" ||
//       x == ":D" ||
//       x == ";-D" ||
//       x == ":~D" ||
//       x == ":~)" ||
//       x == ";~D"
//   ).length;
//   return sorrisoValido;
// }

// //qualify 6
// function oposto(number) {
//   number = number - number * 2;
//   return number;
// }

// //qualify 7
// function separaEInverte(numero) {
//   var array = Array.from(String(numero), Number);
//   return array.reverse();
// }

// //qualify 8
// function maiorEMenor(numeros) {
//   const e_num = numeros.split(" ");

//   let maior = Math.max.apply(null, e_num);
//   let menor = Math.min.apply(null, e_num);

//   return maior.toString() + " " + menor.toString();
// }

//-----------------------------------------------------------------------------------