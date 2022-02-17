import chalk from 'chalk'
import fetch from 'node-fetch'

function geraUsuarios(num){
   return fetch(`https://randomuser.me/api/?results=${num}`)
}

geraUsuarios(10).then(response => {
   response.json().then((data) => {
      let infoPessoas = data.results
      infoPessoas.map(pessoa => console.log(chalk.green(`${pessoa.name.first} ${pessoa.name.last}`)))
   })
})