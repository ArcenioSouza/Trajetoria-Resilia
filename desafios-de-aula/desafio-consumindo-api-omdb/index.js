let filmesController = new FilmesController()
let listaDeFilmes = new ListaFilmes()
let carousel = new Carousel()
let cards = document.querySelector('#cards')

window.addEventListener('load', () => {
   filmesController._criaListaDeFilmes(listaDeFilmes._listaFilmes)
   
   setTimeout(()=>{
      let largura = window.screen.width
      if(largura > 1000){
         cards.innerHTML = carousel._templatePosterDesktop(listaDeFilmes._listaFilmes)
      } else if (largura > 500){
         cards.innerHTML = carousel._templatePosterTablet(listaDeFilmes._listaFilmes)
      } else {
         cards.innerHTML = carousel._templatePosterMobile(listaDeFilmes._listaFilmes)
      }
   },[1000])   
})