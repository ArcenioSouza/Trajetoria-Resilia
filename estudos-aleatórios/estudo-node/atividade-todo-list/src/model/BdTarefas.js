class BdTarefas {
   
   tarefas = [
      {
         id: 1,
         titulo: "Tarefa 1",
         descricao: "Testando resposta de tarefas"
      },
      
      {
         id: "2",
         titulo: "Tarefa 2",
         descricao: "Testando a inserção de tarefas"
      },
   ]

   get tarefas() {
      return Object.values(this.tarefas)
   }

   salvarTarefa(id, titulo, descricao){
      const informacoes = {
         id: id,
         titulo: titulo,
         descricao: descricao
      }

      this.tarefas.push(informacoes)
   }
}

export default BdTarefas;