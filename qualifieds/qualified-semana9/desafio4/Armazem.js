class Armazem {
   constructor() {
     this.arr = []
   }
 
   add(el) {
     this.arr.push(el);
   }
 }

class Pilha extends Armazem{
   constructor(...argumentos){
      super()
      this.arr.push(...argumentos)
   }

   empilha(...item){
      this.arr.push(...item)
   }

   desempilha(){
      return this.arr.pop()
   }

}

class Fila extends Armazem{
   constructor(...argumentos){
      super()
      this.arr.push(...argumentos)
   }

   chegada(item){
      this.arr.push(item)
   }

   partida(){
      return this.arr.shift()
   }

}

pilha = new Fila(6, 7, 8)
pilha.chegada(10)
console.log(pilha.partida())
console.log(pilha.arr)