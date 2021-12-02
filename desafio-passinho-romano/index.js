var radioCodificar = document.querySelector("#radioCodificar");

var radioDecodificar = document.querySelector("#radioDecodificar");

var btn = document.querySelector("#btnCode");

var divResposta = document.querySelector("#resposta");

var selectOption = document.querySelector("#selectOption");

var alfabeto = "abcdefghijklmnopqrstuvwxyz";

function codificarCesar() {
  var textCode = document.querySelector("#text-input").value;
  var textMinusculo = textCode.toLowerCase();
  var textoCodificadoCesar = "";

  for (var i = 0; i < textMinusculo.length; i++) {
    for (var j = 0; j < alfabeto.length; j++)
      if (textMinusculo[i] == alfabeto[j]) {
        if (j == 24) {
          textoCodificadoCesar += alfabeto[0];
          break;
        } else if (j == 25) {
          textoCodificadoCesar += alfabeto[1];
          break;
        } else if (j == 26) {
          textoCodificadoCesar += alfabeto[2];
          break;
        } else {
          textoCodificadoCesar += alfabeto[j + 3];
          break;
        }
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
  var textoDecodificadoCesar = "";

  for (var i = 0; i < textMinusculo.length; i++) {
    for (var j = 0; j < alfabeto.length; j++)
      if (textMinusculo[i] == alfabeto[j]) {
        if (j == 0) {
          textoDecodificadoCesar += alfabeto[24];
          break;
        } else if (j == 1) {
          textoDecodificadoCesar += alfabeto[25];
          break;
        } else if (j == 2) {
          textoDecodificadoCesar += alfabeto[26];
          break;
        } else {
          textoDecodificadoCesar += alfabeto[j - 3];
          break;
        }
      } else if (textMinusculo[i] == " ") {
        textoDecodificadoCesar += " ";
        break;
      }
  }
  return textoDecodificadoCesar;
}

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
    divResposta.innerHTML = `<h3>Cifra de César</h3><h4>${resposta}</h4>`;
  } else {
    var textCode = document.querySelector("#text-input").value;
    divResposta.innerHTML = `<h3>Base64</h3><h4>${textCode}</h4>`;
  }
});
