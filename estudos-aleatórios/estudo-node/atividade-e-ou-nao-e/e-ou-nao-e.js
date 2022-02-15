import chalk from 'chalk';

function temperaturaPaciente(temp) {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         if(temp > 37.5) {
            resolve('Paciente febril')
         } else {
            reject('Paciente não febril')
         }
      }, 3000)
   })
}

temperaturaPaciente(30)
.then((result) => {
   console.log(chalk.red(`[ALERTA]: ${result}`))
})
.catch((error) => {
   console.log(chalk.green(`[INFO]: ${error}`))
})