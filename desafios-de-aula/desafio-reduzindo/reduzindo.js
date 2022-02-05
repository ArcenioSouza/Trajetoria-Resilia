const time = [
   ["Sra.", "Paula", "Albuquerque"],
   ["Sr.", "Kelwin", "Nascimento"],
   ["Sra.", "Gabriella", "Dias", "Cruz"]
 ];
 //Atividade 1: Lista com nomes dos integrantes do time.
 /*
 Utilizando seus conhecimentos de programação funcional, componha as funções necessárias (filter, map, reduce, forEach) para que a lista com arrays de nomes e título de pessoas do time se transforme na lista abaixo:
 
 */
const nomes = time.map(pessoa => pessoa.reduce((acumulador, pessoaAtual) => acumulador.concat(` ${pessoaAtual}`)))
 
 console.log(nomes);
 
 
 //================================== Atividade 2 =======
 const despesas = [
     {tipo: "Luz", valor: 112.46},
     {tipo: "Água", valor: 42.89}, 
     {tipo: "Aluguel", valor: 799.00},
     {tipo: "Mercado", valor: 428.9}
 ];
 
 //Utilize reduce para calcular o total das despezas. Lembre-se, como o array contém objetos, é necessário inicializar o acumulador como zero!
 const valores = despesas.map(despesa => despesa.valor)
 const total = valores.reduce((acumulador, valorAtual) => acumulador + valorAtual)
 
 console.log(total);
 
 //utilize reduce para criar um report com uma lista contendo os tipos de gastos e o total gasto. Lembre-se, é necessário retornar o acumulador para que ele possa ser utilizado novamente. A estrutura do report deve ser: {tipos, total}
 
 const report = null;
 
 console.log(report);