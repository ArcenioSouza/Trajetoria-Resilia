function geraUsuario(){
   const req = new XMLHttpRequest()
   req.open("GET", "https://randomuser.me/api")
   req.onload = function(){
      if(req.status == 200){
         let data = JSON.parse(req.response)
         addUsuarioOnPage(data)
      } else {
         console.log("Erro na requisição")
      }
   }
   req.send()
}

let button = document.querySelector(".btnGerador")
button.addEventListener('click', () => geraUsuario())

function addUsuarioOnPage(infoUsuario){
   var usuario = infoUsuario.results[0]
   var divInfo = document.querySelector(".usuario")

   divInfo.innerHTML = `<h2>${usuario.name.first} ${usuario.name.last}</h2><p>${usuario.email}</p><div><img class="imgPerfil" src="${usuario.picture.thumbnail}"></div>`
}