export function consultarTarefas(app){
   app.get("/tarefas", (req, res) => {
      res.send({
         id: 1,
         titulo: "Tarefa 1",
         descricao: "Testando resposta de tarefas"
      })
   })
}

export function salvarTarefa(app){
   app.post("/tarefas", (req, res) => {
      res.send({
         id: req.body.id,
         titulo: req.body.titulo,
         descricao: req.body.descricao
      })
   })
}



