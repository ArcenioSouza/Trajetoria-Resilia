class Arr {
   constructor(...elementos) {
     this._arr = [...elementos];
   }
 
   adiciona(...elementos) {
     this._arr = [...this._arr, ...elementos]
   }
   
   getArr() {
     return this._arr;
   }
   
   map(){
     return this._arr.map(elemento => elemento.toUpperCase())
   }
   
   filter(){
     return this._arr.filter(elemento => elemento.length % 2 === 1? true : false )
   }
 }