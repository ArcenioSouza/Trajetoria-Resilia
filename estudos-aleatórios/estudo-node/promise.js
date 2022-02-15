const teste = {jacare: 15}

new Promise((resolve, reject) => {
   if (teste.jacare){
      resolve('Deu jacaré no jogo do bicho')
   } else {
      reject('O agiota tá vindo cobrar!')
   }
})
.then(retorno => console.log(retorno))
.catch(erro => console.log(erro))