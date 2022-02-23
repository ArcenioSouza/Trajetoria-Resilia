export function listen(app, port){
   app.listen(port, () => {
      console.log(`Servidor rodando na porta: ${port}`)
   })
}