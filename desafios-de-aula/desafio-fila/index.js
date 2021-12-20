class Fila {
   fila = [];
 
   chegada(...itens) {
     this.fila.push(...itens);
   }
 
   partida() {
     if (this.fila.length > 0) {
       this.fila.shift();
       return this.fila[0];
     } else {
       return "fila vazia";
     }
   }
   mostraFila(){
       console.log(...this.fila)
   }
 }

 let fila = new Fila()
 
 fila.chegada(1, 2, 3, 4)
 fila.partida()
 fila.mostraFila()


