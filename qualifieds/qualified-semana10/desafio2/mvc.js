class Televisao
{
   constructor(tamanho, marca, preco){
      try{
         this.tamanho = tamanho,
         this.marca = marca,
         this.preco = preco
       } catch(e){
         return e.message
       }
    }
  getTamanho(){
    return this.tamanho
  }
  
  getMarca(){
    return this.marca
  }
  
  getPreco(){
    return this.preco
  }
}

class TelevisaoView
{  
  renderizar(tv){
    return `<div><p><span class='size'>${tv.tamanho}</span></p><p>${tv.marca}</p><p>${tv.preco}</p><div>`
  }
}

const tv = new Televisao(42, 'LG', 34543.5)
const tvView = new TelevisaoView();
const render = tvView.renderizar(tv)
console.log(render)