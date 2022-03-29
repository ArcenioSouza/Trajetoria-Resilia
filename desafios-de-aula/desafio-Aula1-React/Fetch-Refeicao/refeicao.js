import fetch from "node-fetch";

fetch("http://www.themealdb.com/api/json/v1/1/lookup.php?i=52772")
   .then((resp) => resp.json())
   .then((data) => {
      const refeicao = data.meals;

      let arrayObj = [refeicao[0]].map((obj) => {
         return Object.keys(obj).map(key => {
            if(key.indexOf('Ingredient') != -1){
               if(obj[key] == null || obj[key] == ''){
                  false
               } else {
                  return obj[key]
               }              
            }            
         })
      })
      const ingredientes = arrayObj[0].filter(item => item != undefined)      

      let fichaRefeicao = {
         id: refeicao[0].idMeal,
         nome: refeicao[0].strMeal,
         area: refeicao[0].strArea,
         ingredientes: ingredientes.toString(),
         instrucoes: refeicao[0].strInstructions,
      };

      console.log(fichaRefeicao);
   });
