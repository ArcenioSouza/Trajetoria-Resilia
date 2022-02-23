import express from "express";
import { getTarefas } from "./controllers/tarefas-controller";
import { getStatus } from "./controllers/status-controller";
import { listen } from "./services/listen";

const app = express();
const port = process.env.PORT || 3000

getTarefas(app)
getStatus(app)
/* listen(app, port) */

app.listen(port, () => {
   console.log(`Servidor rodando na porta: ${port}`)
})