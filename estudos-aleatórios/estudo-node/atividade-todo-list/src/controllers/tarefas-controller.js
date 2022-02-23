import BdTarefas from "../model/BdTarefas.js"
let tarefas = new BdTarefas;

export function consultarTarefas(app){   
   app.get("/tarefas", (req, res) => {
      res.send(tarefas.tarefas)
   })
}

export function salvarTarefa(app){
   app.post("/tarefas", (req, res) => {
      res.send(tarefas.salvarTarefa(req.body.id, req.body.titulo, req.body.descricao))
   })
}



