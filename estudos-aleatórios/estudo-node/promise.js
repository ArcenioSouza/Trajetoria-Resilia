const teste = {jacare: 15}

new Promise((resolve, reject) => {
   setTimeout(() => {
      if (teste.jacare){
         resolve('Deu jacaré no jogo do bicho')
      } else {
         reject('O agiota tá vindo cobrar!')
      }
   }, 5000)
})
.then(retorno => {
   console.log(retorno)
   console.log('Qdo vai executar')
})
.catch(erro => console.log(erro))

