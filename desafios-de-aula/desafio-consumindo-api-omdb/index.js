(function () {
   let titles = ['tt0108778', 'tt0898266', 'tt7556122', 'tt0944947', 'tt5180504', 'tt2661044', 'tt4052886', 'tt11126994', 'tt4145054', 'tt1520211', 'tt2193021', 'tt5420376']
   
   let container = $('#containerInfoApi')

   titles.forEach(element => {
      
      $.ajax({
         type: "GET",
         url: `https://www.omdbapi.com/?i=${element}&apikey=4adad40c`,
         success: function (response) {  
            container.append(`<img class="poster" id="${response.imdbID}" src="${response.Poster}">`)
         }
      });
   })
})()



