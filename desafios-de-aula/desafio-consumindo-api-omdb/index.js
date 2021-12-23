let filmesController = new FilmesController()
let listaDeFilmes = new ListaFilmes()
let carousel = new Carousel()
let cards = document.querySelector('#cards')

window.addEventListener('load', () => {
   filmesController._criaListaDeFilmes(listaDeFilmes._listaFilmes)
   
   setTimeout(()=>{
      cards.innerHTML = carousel._templatePoster(listaDeFilmes._listaFilmes)
   },[1000])   
})