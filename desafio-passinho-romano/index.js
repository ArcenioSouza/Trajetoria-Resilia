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

btn.addEventListener('click', function(e){
   e.preventDefault()
   if(selectOption.value == "Cifra de César"){
      var textCode = document.querySelector("#text-input").value
      divResposta.innerHTML = `<h3>Cifra de César</h3><p>${textCode}</p>`

   }else{
      var textCode = document.querySelector("#text-input").value
      divResposta.innerHTML = `<h3>Base64</h3><p>${textCode}</p>`
   }
})