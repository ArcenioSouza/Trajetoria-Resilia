// DATE
// O Date é uma instancia do Javascript que 
//representa um momento no tempo.

//COMO USAR -------------------------------------
            //o Date() retorna a data e a hora atual
let data = new Date()
console.log(data) //2021-12-15T13:47:34.748Z

data = new Date(2021,05,15) // a instancia pode receber 
//esses parâmetros: (year: number, month: number, 
//date?: number, hours?: number, minutes?: number, 
//seconds?: number, ms?: number), separados 
//por vírgula.

console.log(data) //2021-06-15 (os meses em Javascript 
//vão de 0 a 11, por isso retornou o mês de Junho ou
//mês 6)

//COMO EXTRAIR DADOS DA DATA ------------------------------
console.log(data.getFullYear())//retorna 2021

console.log(data.getMonth()) // retorna 5

console.log(data.getDate()) // retorna 15

console.log(data.getDay()) //retorna 2, que é o dia 
//da semana de 0 a 6 (0 = domingo, 6 = sábado)

console.log(data.toLocaleString()) //Converte o formato da data conforme a localização do usuário, ou pelo o que for passado como parâmetro.

console.log(Date.now()) //retorna a data atual em milissegundos.

console.log(Date.UTC(2021)) //retorna a qtd de milissegundos até a data informada.

//COMO COLOCAR OU MUDAR DADOS DA DATA -----------------------
data.setFullYear(2015)

data.setMonth(06)

data.setDate(25)

console.log(data) //retorna 2015-07-25

//FUNÇÕES MUITO UTILIZADAS ----------------------------------

//formatar data para padrão brasileiro************************
function formatarData(data){
   let newData = new Date(data);
   return `${newData.getDate()}/${newData.getMonth()+1}/${newData.getFullYear()}`
}

console.log(formatarData(data)) // retorna 25/7/2015

//calcular a diferença de dias entre as datas*******************************************

let diaAtual = new Date()
let dataPassada = new Date(2021,11,13)
                           //Math.abs retorna um
                           // número absoluto e
                           // positivo de uma conta.
                                    //getTime() pega a qtd de milissegundo que 
                                    //passou de 01/01/1970 até a data informada.
let dataEmMilissegundos = Math.abs(diaAtual.getTime() - dataPassada.getTime())

                     //Math.ceil arredonda um número obtido de um calculo.
let diasDeDiferenca = Math.ceil(dataEmMilissegundos / (1000 * 60 * 60 * 24))

console.log(`A diferença é de ${diasDeDiferenca} dias`) //A diferença é de 3 dias

// realizar a soma de dias *************************************************************
let dataSoma = new Date()
let quantidadeDeDias = 40
console.log("Data atual: "+formatarData(dataSoma)) //Data atual: 15/12/2021
dataSoma.setDate(dataSoma.getDate() + quantidadeDeDias)
console.log("Data somada: "+formatarData(dataSoma)) //Data somada: 24/1/2022

// pegar o primeiro e o último dia do mês***********************************************
let dataMes = new Date();
let primeiroDia = new Date(dataMes.getFullYear(), dataMes.getMonth(), 1)
                                             // o Javascript entende o 0 como uma 
                                             //requisição do ultimo dia do mês.
let ultimoDia = new Date(dataMes.getFullYear(), dataMes.getMonth() + 1, 0) 

console.log(formatarData(primeiroDia) +" || "+ formatarData(ultimoDia)) 
//retorno 1/12/2021 || 31/12/2021

//-------------------------------------------------------------------------------------