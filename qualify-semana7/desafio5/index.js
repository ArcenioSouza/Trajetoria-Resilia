let pessoa = {
   nome: "Antônia Moreira da Silva",
   idade: 39,
   profissao: "Desenvolvedora back end"
}

function fabricaDicionario(){
   
   return{
      obj: [],

      novoItem(chave, valor){
         this.obj.push({[chave]: valor})
      },

      pesquisar(chave){
         let resultado = `Não foram encontrados registros para ${chave}`
         for(let i = 0; i < this.obj.length; i++){
            if(this.obj[i][chave]){
               return resultado = this.obj[i][chave]
            } 
         }
         return resultado
      }
   }
}

const teste = fabricaDicionario()

teste.novoItem("Maçã", "Uma fruta")
teste.novoItem("Futebol", "Um esporte")

console.log(teste.pesquisar("Futebol"))
