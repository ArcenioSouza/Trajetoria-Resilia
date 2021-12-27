class Carousel {

   _templatePosterDesktop(listaDeFilmes){
      return `
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
         <div class="carousel-inner">
            <div class="carousel-item active filmes" id="carousel1">
               <img class="poster" id="${listaDeFilmes[0]._id}" src="${listaDeFilmes[0]._url}">
               <img class="poster" id="${listaDeFilmes[1]._id}" src="${listaDeFilmes[1]._url}">
               <img class="poster" id="${listaDeFilmes[2]._id}" src="${listaDeFilmes[2]._url}">
               <img class="poster" id="${listaDeFilmes[3]._id}" src="${listaDeFilmes[3]._url}">
            </div>
            <div class="carousel-item filmes" id="carousel2">
               <img class="poster" id="${listaDeFilmes[4]._id}" src="${listaDeFilmes[4]._url}">
               <img class="poster" id="${listaDeFilmes[5]._id}" src="${listaDeFilmes[5]._url}">
               <img class="poster" id="${listaDeFilmes[6]._id}" src="${listaDeFilmes[6]._url}">
               <img class="poster" id="${listaDeFilmes[7]._id}" src="${listaDeFilmes[7]._url}">
            </div>
            <div class="carousel-item filmes" id="carousel3">
               <img class="poster" id="${listaDeFilmes[8]._id}" src="${listaDeFilmes[8]._url}">
               <img class="poster" id="${listaDeFilmes[9]._id}" src="${listaDeFilmes[9]._url}">
               <img class="poster" id="${listaDeFilmes[10]._id}" src="${listaDeFilmes[10]._url}">
               <img class="poster" id="${listaDeFilmes[11]._id}" src="${listaDeFilmes[11]._url}">
            </div>
         </div>
         <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
         <span class="carousel-control-prev-icon" aria-hidden="true"></span>
         <span class="visually-hidden">Previous</span>
         </button>
         <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
         <span class="carousel-control-next-icon" aria-hidden="true"></span>
         <span class="visually-hidden">Next</span>
         </button>
      </div>
      `
   }

   _templatePosterTablet(listaDeFilmes){
      return `
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
         <div class="carousel-inner">
            <div class="carousel-item active" id="carousel1">
               <img class="poster" id="${listaDeFilmes[0]._id}" src="${listaDeFilmes[0]._url}">
               <img class="poster" id="${listaDeFilmes[1]._id}" src="${listaDeFilmes[1]._url}">
               <img class="poster" id="${listaDeFilmes[2]._id}" src="${listaDeFilmes[2]._url}">
            </div>
            <div class="carousel-item" id="carousel2">
               <img class="poster" id="${listaDeFilmes[3]._id}" src="${listaDeFilmes[3]._url}">
               <img class="poster" id="${listaDeFilmes[4]._id}" src="${listaDeFilmes[4]._url}">
               <img class="poster" id="${listaDeFilmes[5]._id}" src="${listaDeFilmes[5]._url}">
            </div>
            <div class="carousel-item" id="carousel3">
               <img class="poster" id="${listaDeFilmes[6]._id}" src="${listaDeFilmes[6]._url}">
               <img class="poster" id="${listaDeFilmes[7]._id}" src="${listaDeFilmes[7]._url}">
               <img class="poster" id="${listaDeFilmes[8]._id}" src="${listaDeFilmes[8]._url}">
            </div>

            <div class="carousel-item" id="carousel3">
               <img class="poster" id="${listaDeFilmes[9]._id}" src="${listaDeFilmes[9]._url}">
               <img class="poster" id="${listaDeFilmes[10]._id}" src="${listaDeFilmes[10]._url}">
               <img class="poster" id="${listaDeFilmes[11]._id}" src="${listaDeFilmes[11]._url}">
            </div>
         </div>
         <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
         <span class="carousel-control-prev-icon" aria-hidden="true"></span>
         <span class="visually-hidden">Previous</span>
         </button>
         <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
         <span class="carousel-control-next-icon" aria-hidden="true"></span>
         <span class="visually-hidden">Next</span>
         </button>
      </div>
      `
   }

   _templatePosterMobile(listaDeFilmes){
      return `
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
         <div class="carousel-inner">
            <div class="carousel-item active" id="carousel1">
               <img class="poster" id="${listaDeFilmes[0]._id}" src="${listaDeFilmes[0]._url}">
               <img class="poster" id="${listaDeFilmes[1]._id}" src="${listaDeFilmes[1]._url}">
               
            </div>
            <div class="carousel-item" id="carousel2">
               <img class="poster" id="${listaDeFilmes[2]._id}" src="${listaDeFilmes[2]._url}">
               <img class="poster" id="${listaDeFilmes[3]._id}" src="${listaDeFilmes[3]._url}">
               
            </div>
            <div class="carousel-item" id="carousel3">
               <img class="poster" id="${listaDeFilmes[4]._id}" src="${listaDeFilmes[4]._url}">
               <img class="poster" id="${listaDeFilmes[5]._id}" src="${listaDeFilmes[5]._url}">
               
            </div>
            <div class="carousel-item" id="carousel4">
               <img class="poster" id="${listaDeFilmes[6]._id}" src="${listaDeFilmes[6]._url}">
               <img class="poster" id="${listaDeFilmes[7]._id}" src="${listaDeFilmes[7]._url}">
            </div>
            <div class="carousel-item" id="carousel5">
               <img class="poster" id="${listaDeFilmes[8]._id}" src="${listaDeFilmes[8]._url}">
               <img class="poster" id="${listaDeFilmes[9]._id}" src="${listaDeFilmes[9]._url}">
            </div>
            <div class="carousel-item" id="carousel5">
               <img class="poster" id="${listaDeFilmes[10]._id}" src="${listaDeFilmes[10]._url}">
               <img class="poster" id="${listaDeFilmes[11]._id}" src="${listaDeFilmes[11]._url}">
            </div>            
         </div>
         <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
         <span class="carousel-control-prev-icon" aria-hidden="true"></span>
         <span class="visually-hidden">Previous</span>
         </button>
         <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
         <span class="carousel-control-next-icon" aria-hidden="true"></span>
         <span class="visually-hidden">Next</span>
         </button>
      </div>
      `
   }

      _templatePosterInformacoesDesktop(listaDeFilmes){
         return `
         <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
               <div class="carousel-item active" id="carousel1">
                  <img class="poster" id="${listaDeFilmes[0]._id}" src="${listaDeFilmes[0]._url}">
                  <img class="poster" id="${listaDeFilmes[1]._id}" src="${listaDeFilmes[1]._url}">
                  <img class="poster" id="${listaDeFilmes[2]._id}" src="${listaDeFilmes[2]._url}">
                  <img class="poster" id="${listaDeFilmes[3]._id}" src="${listaDeFilmes[3]._url}">
                  <img class="poster" id="${listaDeFilmes[4]._id}" src="${listaDeFilmes[4]._url}">
                  <img class="poster" id="${listaDeFilmes[5]._id}" src="${listaDeFilmes[5]._url}">
               </div>
               <div class="carousel-item" id="carousel4">
                  <img class="poster" id="${listaDeFilmes[6]._id}" src="${listaDeFilmes[6]._url}">
                  <img class="poster" id="${listaDeFilmes[7]._id}" src="${listaDeFilmes[7]._url}">
                  <img class="poster" id="${listaDeFilmes[8]._id}" src="${listaDeFilmes[8]._url}">
                  <img class="poster" id="${listaDeFilmes[9]._id}" src="${listaDeFilmes[9]._url}">
                  <img class="poster" id="${listaDeFilmes[10]._id}" src="${listaDeFilmes[10]._url}">
                  <img class="poster" id="${listaDeFilmes[11]._id}" src="${listaDeFilmes[11]._url}">
               </div>          
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
            </button>
         </div>
         `
   }

   _templatePosterInformacoesTablet(listaDeFilmes){
      return `
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
         <div class="carousel-inner">
            <div class="carousel-item active" id="carousel1">
               <img class="poster" id="${listaDeFilmes[0]._id}" src="${listaDeFilmes[0]._url}">
               <img class="poster" id="${listaDeFilmes[1]._id}" src="${listaDeFilmes[1]._url}">
               <img class="poster" id="${listaDeFilmes[2]._id}" src="${listaDeFilmes[2]._url}">
               <img class="poster" id="${listaDeFilmes[3]._id}" src="${listaDeFilmes[3]._url}">
            </div>
            <div class="carousel-item" id="carousel4">
               <img class="poster" id="${listaDeFilmes[4]._id}" src="${listaDeFilmes[4]._url}">
               <img class="poster" id="${listaDeFilmes[5]._id}" src="${listaDeFilmes[5]._url}">
               <img class="poster" id="${listaDeFilmes[6]._id}" src="${listaDeFilmes[6]._url}">
               <img class="poster" id="${listaDeFilmes[7]._id}" src="${listaDeFilmes[7]._url}">
            </div>
            <div class="carousel-item" id="carousel4">
               <img class="poster" id="${listaDeFilmes[8]._id}" src="${listaDeFilmes[8]._url}">
               <img class="poster" id="${listaDeFilmes[9]._id}" src="${listaDeFilmes[9]._url}">
               <img class="poster" id="${listaDeFilmes[10]._id}" src="${listaDeFilmes[10]._url}">
               <img class="poster" id="${listaDeFilmes[11]._id}" src="${listaDeFilmes[11]._url}">
            </div>             
         </div>
         <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
         <span class="carousel-control-prev-icon" aria-hidden="true"></span>
         <span class="visually-hidden">Previous</span>
         </button>
         <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
         <span class="carousel-control-next-icon" aria-hidden="true"></span>
         <span class="visually-hidden">Next</span>
         </button>
      </div>
      `
   }

   _templatePosterInformacoesMobile(listaDeFilmes){
      return `
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
         <div class="carousel-inner">
            <div class="carousel-item active" id="carousel1">
               <img class="poster" id="${listaDeFilmes[0]._id}" src="${listaDeFilmes[0]._url}">
               <img class="poster" id="${listaDeFilmes[1]._id}" src="${listaDeFilmes[1]._url}">
            </div>
            <div class="carousel-item" id="carousel4">
               <img class="poster" id="${listaDeFilmes[2]._id}" src="${listaDeFilmes[2]._url}">
               <img class="poster" id="${listaDeFilmes[3]._id}" src="${listaDeFilmes[3]._url}">
            </div>
            <div class="carousel-item" id="carousel4">
               <img class="poster" id="${listaDeFilmes[4]._id}" src="${listaDeFilmes[4]._url}">
               <img class="poster" id="${listaDeFilmes[5]._id}" src="${listaDeFilmes[5]._url}">
            </div>  
            <div class="carousel-item" id="carousel4">
               <img class="poster" id="${listaDeFilmes[6]._id}" src="${listaDeFilmes[6]._url}">
               <img class="poster" id="${listaDeFilmes[7]._id}" src="${listaDeFilmes[7]._url}">
            </div>    
            <div class="carousel-item" id="carousel4">
               <img class="poster" id="${listaDeFilmes[8]._id}" src="${listaDeFilmes[8]._url}">
               <img class="poster" id="${listaDeFilmes[9]._id}" src="${listaDeFilmes[9]._url}">
            </div>     
            <div class="carousel-item" id="carousel4">
               <img class="poster" id="${listaDeFilmes[10]._id}" src="${listaDeFilmes[10]._url}">
               <img class="poster" id="${listaDeFilmes[11]._id}" src="${listaDeFilmes[11]._url}">
            </div>     
         </div>
         <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
         <span class="carousel-control-prev-icon" aria-hidden="true"></span>
         <span class="visually-hidden">Previous</span>
         </button>
         <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
         <span class="carousel-control-next-icon" aria-hidden="true"></span>
         <span class="visually-hidden">Next</span>
         </button>
      </div>
      `
   }
}