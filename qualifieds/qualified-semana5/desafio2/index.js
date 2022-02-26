function filtroAmigo(arrayAmigo){
  // a função filter passa pelos itens do array e retorna os nomes do array que possuem tamanho 4 guardando esses nomes na variavel amigos.
  const amigos = arrayAmigo.filter((names) => names.length == 4)
  return amigos
}