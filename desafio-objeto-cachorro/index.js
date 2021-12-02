var cachorro = {
   nome: '',
   dataNascimento: '',
   latir: function(){
      alert("O cachorro latiu")
   },
   comer: function(){
      alert("O cachorro comeu")
   },
   objetoCachorro: function(){
      console.log(`Meu nome é ${cachorro.nome}, nasci em ${cachorro.dataNascimento}`)
   }
}

cachorro.nome = prompt("Qual é o nome do cachorro?")
cachorro.dataNascimento = prompt("Qual a data de nascimento do cachorro?")