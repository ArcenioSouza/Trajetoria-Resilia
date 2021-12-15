// class Pilha {
//    arrayPilha = []
//    top = -1

//    empilha(item) {
//       this.top++
//       this.arrayPilha.push(item)
//    }

//    desempilha(){
//       try{
//          if(this.top != -1){
//             this.arrayPilha.pop()
//             this.top--
//             return console.log(this.arrayPilha[this.top])
//          } else {
//             throw new Error("Pilha vazia")
//          }         
//       } catch (erro){
//          console.log(erro)
//       }      
//    }

//    print(){
//       this.arrayPilha.forEach((item, index) => {
//          console.log(`índice: ${index} item: ${item}`)
//       })
//    }
// }

// let pilhaItem = new Pilha
// pilhaItem.empilha("Livro 1")
// pilhaItem.empilha("Livro 2")
// pilhaItem.empilha("Livro 3")
// pilhaItem.empilha("Livro 4")
// console.log(pilhaItem.arrayPilha)
// console.log(pilhaItem.top)

// pilhaItem.desempilha()
// pilhaItem.desempilha()
// // pilhaItem.desempilha()
// // pilhaItem.desempilha()
// // pilhaItem.desempilha()
// // pilhaItem.desempilha()

// pilhaItem.print()



try{
   mochila.guardar()
} catch(error){
   console.log(error)
}

console.log("continuando aplicativo")