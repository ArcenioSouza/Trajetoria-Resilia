export function getTarefas(app){
   app.get("/tarefas", (req, res) => {
      res.send({
         id: 1,
         titulo: "Tarefa 1",
         Descrição: "Testando resposta de tarefas"
      })
   })
}



