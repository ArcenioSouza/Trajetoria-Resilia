var divPokemon = document.getElementById('infoPoke')

function pegarPokemon(){
   var requisicao = new XMLHttpRequest()
   requisicao.open("GET", "https://pokeapi.co/api/v2/pokemon/35/")

   requisicao.onload = function(){
      if(requisicao.status == 200){
         var resposta = JSON.parse(requisicao.response)
         infoPokemonHtml(resposta)
      } else{
         console.log("Erro na requisição")
      }
   }
   requisicao.send()   
}

function infoPokemonHtml(pokemon){
   divPokemon.innerHTML = `<h1>${pokemon.name}</h1><p>${pokemon.past_types[0].types[0].type.name}</p><img src="${pokemon.sprites.front_shiny}">`
}