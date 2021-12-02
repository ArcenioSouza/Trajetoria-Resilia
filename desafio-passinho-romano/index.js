var radioCodificar = document.querySelector("#radioCodificar");

var radioDecodificar = document.querySelector("#radioDecodificar");

var btn = document.querySelector("#btnCode");

var divResposta = document.querySelector("#resposta");

var selectOption = document.querySelector("#selectOption");

var inputNumber = document.querySelector('#input-number')

var valueIncrement = document.querySelector('#inputNumberValue')


var alfabeto = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";

function codificarCesar() {
  var textCode = document.querySelector("#text-input").value;
  var textMinusculo = textCode.toLowerCase();
  var textoCodificadoCesar = "";

  for (var i = 0; i < textMinusculo.length; i++) {
    for (var j = 0; j < alfabeto.length; j++)
      if (textMinusculo[i] == alfabeto[j]) {
        textoCodificadoCesar += alfabeto[j + parseInt(valueIncrement.value)];
        break
      } else if (textMinusculo[i] == " ") {
        textoCodificadoCesar += " ";
        break;
      }
  }
  return textoCodificadoCesar;
}

function decodificarCesar() {
  var textCode = document.querySelector("#text-input").value;
  var textMinusculo = textCode.toLowerCase();
  var textoCodificadoCesar = "";

  for (var i = 0; i < textMinusculo.length; i++) {
    for (var j = alfabeto.length; j >= 0; j++)
      if (textMinusculo[i] == alfabeto[j]) {
        textoCodificadoCesar += alfabeto[j - parseInt(valueIncrement.value)];
        break
      } else if (textMinusculo[i] == " ") {
        textoCodificadoCesar += " ";
        break;
      }
  }
  return textoCodificadoCesar;
  
}

function codificaBase() {
  var textCode = document.querySelector("#text-input").value;
  var binario = btoa(textCode);
  return binario;
}

function decodificaBase() {
  var textCode = document.querySelector("#text-input").value;
  var binario = atob(textCode);
  return binario;
}

selectOption.addEventListener('change', function(){
  if(selectOption.value == "Cifra de César"){
    inputNumber.style.display = "block"
  }else{
    inputNumber.style.display = "none"
  }
})

radioCodificar.addEventListener("click", function () {
  btn.innerText = "Codificar Mensagem";
});

radioDecodificar.addEventListener("click", function () {
  btn.innerText = "Decodificar Mensagem";
});

btn.addEventListener("click", function (e) {
  e.preventDefault();
  if (selectOption.value == "Cifra de César") {
    if (radioCodificar.checked) {
      var resposta = codificarCesar();
    } else {
      var resposta = decodificarCesar();
    }
  } else {
    if (radioCodificar.checked) {
      var resposta = codificaBase();
    } else {
      var resposta = decodificaBase();
    }
  }
  console.log(valueIncrement.value)
  divResposta.innerHTML = `<h3>${selectOption.value}</h3><h4>${resposta}</h4>`;
});
