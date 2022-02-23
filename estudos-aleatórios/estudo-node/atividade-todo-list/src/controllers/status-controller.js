export function consultarStatus(app){
   app.get("/status", (req, res) => {
      res.send({
         1:{
            id: 1,
            status: "Em andamento"
         },
         2:{
            id: 2,
            status: "Feito"
         },
         3:{
            id: 3,
            status: "Fazendo"
         }
      })
   })
}