import express from "express";
import { consultarTarefas, salvarTarefa } from "./controllers/tarefas-controller.js";
import { consultarStatus } from "./controllers/status-controller.js";
import { listen } from "./services/listen.js";

const app = express();
const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({extended: true}))

consultarTarefas(app)
consultarStatus(app)
salvarTarefa(app)
listen(app, port)