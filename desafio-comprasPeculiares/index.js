var qtdElementos = prompt("Quantos itens você deseja inserir na lista?");

var itensLista = [];

function criarLista(qtdElementosNaLista) {
  var numeroDeItens = 1;
  //aqui eu vou repetir a instrução até que a qtd de itens na lista seja completada
  while (numeroDeItens <= qtdElementosNaLista) {
    var item = prompt(`Digite o item ${numeroDeItens} da lista`);
    //aqui eu faço um if para verificar se o item tem um numero par de letras
    if (item.length % 2 != 0) {
      //se passar pela verificação o item é incluido no array caso contrario da uma msg de erro
      itensLista.push(item);
      numeroDeItens++;
    } else {
      alert("A quantidade de letras não é impar");
    }
  }
}

criarLista(qtdElementos);
console.log(itensLista);