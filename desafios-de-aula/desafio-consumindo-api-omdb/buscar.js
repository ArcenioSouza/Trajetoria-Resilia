(function () {
   let titles1 = [
      "tt0108778",
      "tt0898266",
      "tt7556122",
      "tt0944947",
      "tt5180504",
      "tt2661044",
      "tt4052886",
      "tt11126994",
      "tt4145054",
      "tt1520211",
      "tt2193021",
      "tt5420376",
   ];

   titles1.forEach((element) => {
      $.ajax({
         type: "GET",
         url: `https://www.omdbapi.com/?apikey=4adad40c&i=${element}`,
         success: function (response) {
            $("#resultBusca").append(
               `<img class="posterBusca" id="${response.imdbID}" src="${response.Poster}">`
            );
         },
      });
   });
})();

const btnBuscar = document.querySelector("#btnBuscar");

btnBuscar.addEventListener("click", () => {
   let valueInput = $("#textBusca").val();
   let valorRadio = "";
   if ($("#radioBusca1").prop("checked")) {
      valorRadio = $("#radioBusca1").val();
   } else {
      valorRadio = $("#radioBusca2").val();
   }

   $.ajax({
      type: "GET",
      url: `https://www.omdbapi.com/?apikey=4adad40c&s=${valueInput}&type=${valorRadio}`,
      success: function (response) {
         try {
            const result = response.Search;
            console.log(result)
            let divBusca = $(`<div class="imagens-busca"></div>`);
               result.forEach((element) => {
                  if(element.Poster != "N/A"){
                     divBusca.append(
                        `<img class="posterBusca" id="${element.imdbID}" src="${element.Poster}">`
                     );
                  }                  
               });
            
            $("#resultBusca").html(divBusca);
         } catch {
            throw new Error('Input em branco')       
         }
      },
   });
});

let home = document.querySelector("#home");
home.addEventListener("click", () => {
   window.location = "./index.html";
});
