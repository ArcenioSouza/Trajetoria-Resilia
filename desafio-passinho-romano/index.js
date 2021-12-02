var radioCodificar = document.querySelector("#radioCodificar")

var radioDecodificar = document.querySelector("#radioDecodificar")

var btn = document.querySelector("#btnCode")

var divResposta = document.querySelector("#resposta")

var selectOption = document.querySelector("#selectOption")



radioCodificar.addEventListener("click", function(){
   btn.innerText = "Codificar Mensagem"
})

radioDecodificar.addEventListener("click", function(){
   btn.innerText = "Decodificar Mensagem"
})

btn.addEventListener('click', function(){
   btn.preventDefault()
   if(selectOption.value == "Cifra de César"){
      var h1 = document.createElement('h1').innerText = "Cifra de César"
      divResposta.append(h1)
   }
})