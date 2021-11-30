var texto = document.createElement('p')
var body = document.querySelector('body')

function abrir(){   
   texto.innerText = "Estamos Abertos"   
   body.append(texto)
}

function fechar(){
   var tagP = document.querySelector('p')
   tagP.innerText = "Estamos Fechados"
}