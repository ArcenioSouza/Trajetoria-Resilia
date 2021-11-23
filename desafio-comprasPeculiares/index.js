var qtdElementos = prompt("Quantos itens você deseja inserir na lista?");

var itensLista = [];

function criarLista(qtdElementosNaLista) {
  var numeroDeItens = 1;
  while (numeroDeItens <= qtdElementosNaLista) {
    var item = prompt(`Digite o item ${numeroDeItens} da lista`);
    if (item.length % 2 != 0) {
      itensLista.push(item);
      numeroDeItens++;
    } else {
      alert("A quantidade de letras não é impar");
    }
  }
}

criarLista(qtdElementos);
console.log(itensLista);