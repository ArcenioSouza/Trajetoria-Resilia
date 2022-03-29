import fetch from "node-fetch";

fetch("http://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
   .then((resp) => resp.json())
   .then((data) => {
      const seaFood = data.meals;  
      const listaSeaFoods = [] 
      for(let i = 0; i < 10; i++){
         listaSeaFoods.push(seaFood[i].strMeal)
      }   
      console.log(listaSeaFoods)
   });
