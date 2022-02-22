import express from "express";

const app = express();
const port = process.env.PORT || 3000

app.get("/tarefas", (req, res) => {
   res.send({
      id: 1,
      titulo: "Tarefa 1",
      Descrição: "Testando resposta de tarefas"
   })
})

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

app.listen(port, () => {
   console.log(`Servidor rodando na porta: ${port}`)
})