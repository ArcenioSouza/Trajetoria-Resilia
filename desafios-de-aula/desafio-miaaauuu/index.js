class Gato {
   constructor(nome, idade, sexo){
      this.nome = nome
      this.idade = idade
      this.sexo = sexo
   }

   miar(){
      alert(`${this.nome} está miando! Miaaaau`)
   }

   comer(){
      alert(`Deu fome! ${this.nome} está comendo!`)
   }
}