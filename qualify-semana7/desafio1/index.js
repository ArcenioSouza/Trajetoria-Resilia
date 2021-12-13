var listaCampeoes = [
   {season: '1999-00', team: 'Real Madrid', country: 'Spain'},
   {season: '2000-01', team: 'Bayern Munich', country: 'Germany'},
   {season: '2001-02', team: 'Real Madrid', country: 'Spain'},
   {season: '2002-03', team: 'Milan', country: 'Italy'},
   {season: '2003-04', team: 'Porto', country: 'Portugal'}
 ]

 function contaVitorias(array, pais){
    let qtdTitulos = 0;

    for(let i = 0; i < array.length; i++){
       if(array[i].country == pais){
          qtdTitulos += 1
       }
    }
    return console.log(qtdTitulos)
 }

 contaVitorias(listaCampeoes, 'Spain')