var divPokemon = document.getElementById("infoPoke");

var divLista = document.getElementById("lista");

function pegarPokemon() {
   var requisicao = new XMLHttpRequest();
   requisicao.open("GET", "https://pokeapi.co/api/v2/pokemon/35/");

   requisicao.onload = function () {
      if (requisicao.status == 200) {
         var resposta = JSON.parse(requisicao.response);
         infoPokemonHtml(resposta);
      } else {
         console.log("Erro na requisição");
      }
   };
   requisicao.send();
}

function gerarListaPokemon() {
   var requisicao = new XMLHttpRequest();
   var valorBusca = document.getElementById('busca').value
   requisicao.open("GET", `https://pokeapi.co/api/v2/pokemon/${valorBusca}/`);

   requisicao.onload = function () {
      if (requisicao.status == 200) {
         var resposta = JSON.parse(requisicao.response);
         infoPokemonHtml(resposta)
      } else {
         console.log("Erro na requisição");
      }
   };

   requisicao.send();
}

function infoPokemonHtml(pokemon) {
   var poke = document.createElement("div");

   poke.setAttribute("class", "cardPoke");

   poke.setAttribute(`${pokemon.types[0].type.name}`, `${pokemon.types[0].type.name}`)

   poke.innerHTML = `<h1>${pokemon.name}</h1><p id="type">${pokemon.types[0].type.name}</p><img src="${pokemon.sprites.front_shiny}">`;

   divLista.appendChild(poke);
}
