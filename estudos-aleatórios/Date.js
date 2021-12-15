// DATE
// O Date é uma instancia do Javascript que representa um momento no tempo.

//COMO USAR -------------------------------------------------------------------------
            //o Date() retorna a data e a hora atual
let data = new Date()
console.log(data) //2021-12-15T13:47:34.748Z

data = new Date(2021,05,15) // a instancia pode receber esses parâmetros: (year: number, month: number, date?: number, hours?: number, minutes?: number, seconds?: number, ms?: number), separados por vírgula.

console.log(data) //2021-06-15 (os meses em Javascript vão de 0 a 11, por isso retornou o mês de Junho ou mês 6)

//COMO EXTRAIR DADOS DA DATA --------------------------------------------------------
console.log(data.getFullYear())//retorna 2021

console.log(data.getMonth()) // retorna 5

console.log(data.getDate()) // retorna 15

console.log(data.getDay()) //retorna 2, que é o dia da semana de 0 a 6 (0 = domingo, 6 = sábado)

//COMO COLOCAR OU MUDAR DADOS DA DATA -----------------------------------------------
data.setFullYear(2015)

data.setMonth(06)

data.setDate(25)

console.log(data) //retorna 2015-07-25

//FUNÇÕES MUITO UTILIZADAS ----------------------------------------------------------

//formatar data para padrão brasileiro
function formatarData(data){
   let newData = new Date(data);
   return `${newData.getDate()}/${newData.getMonth()+1}/${newData.getFullYear()}`
}

console.log(formatarData(data)) // retorna 25/7/2015

