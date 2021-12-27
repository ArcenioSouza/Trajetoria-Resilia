class Informacoes{
   constructor(){
      this.filme = JSON.parse(localStorage.getItem('infoFilme'))
   }
   

   _viewInfoFilme(){
      return `
      <div class="background-informacoes">
               <div id="imagem">
                  <img src="${this.filme._url}" alt="" />
               </div>
               <div id="informacoes">
                  <h1 id="titulo">${this.filme._titulo}</h1>
                  <p><span id="ano">${this.filme._ano}</span> | <span id="tempo">${this.filme._tempo}</span></p>
                  <p id="descricao">${this.filme._descricao}</p>
                  <p id="elenco">Elenco:<br><span id="elenco">${this.filme._elenco}</span></p>
                  <p id="genero">Genero:<br><span id="genero">${this.filme._genero}</span></p>
               </div>
            </div>        
      
      `
   }

}