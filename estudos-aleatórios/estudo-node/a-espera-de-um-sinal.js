function comunicacaoPerdida(msg){
   return msg
}

new Promise((resolve, reject) => {
   setTimeout(() => {
      const msg = comunicacaoPerdida(true)
      if(msg !== true){
         resolve('ok, todos vivos na estação')
      } else {
         reject('comunicação perdida')
      }
   }, 2500)
})
.then(result => console.log(result))
.catch(error => console.log(error))