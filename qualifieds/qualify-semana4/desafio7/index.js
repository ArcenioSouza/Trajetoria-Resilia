
function separaEInverte(numero) {
  //através da função Array.from, eu pego o argumento que é uma sequencia de números, converto em string, separo essas strings em um array em forma de numeros denovo. 
  var array = Array.from(String(numero), Number);
  
  //aqui através do método reverse eu inverto as posições dos numeros no array.
  return array.reverse();
}
