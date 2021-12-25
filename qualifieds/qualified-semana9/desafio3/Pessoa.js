class Pessoa {
   constructor(nome, sobrenome, dataNascimento){
     this.nome = nome,
     this.sobrenome = sobrenome,
     this.dataNascimento = dataNascimento
   }
   
   nomeCompleto(){
     return `${this.nome} ${this.sobrenome}`
   }
   
   abreviacao(){
     let abreviado = this.nome[0]
     abreviado += `.${this.sobrenome[0]}` 
     for(let i = 0; i < this.sobrenome.length; i++){
        if(this.sobrenome[i] == " "){
           abreviado += `.${this.sobrenome[i+1]}`
        }
     }

     return abreviado.toUpperCase()
   }
 }

let pessoa = new Pessoa('arcenio', 'Souza Silva', '27/02/1986')

console.log(pessoa.abreviacao())