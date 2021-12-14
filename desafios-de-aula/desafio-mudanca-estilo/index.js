var divPrincipal = document.querySelector('#principal')

var divs = document.querySelectorAll('[click-fica-vermelho]')


divPrincipal.addEventListener("click", function(){
   if(divPrincipal.style.flexDirection == "row"){
      divPrincipal.style.flexDirection = "column"
   }else{
      divPrincipal.style.flexDirection = "row"
   }
})

Array.from(divs).forEach(e => e.addEventListener('click', () => {
   if(e.style.backgroundColor != "red"){
      e.style.backgroundColor = "red"
   }else{
      e.style.backgroundColor = "green"
   }
}))


