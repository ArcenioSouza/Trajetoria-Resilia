class Televisao
{
   constructor(tamanho, marca, preco){
      if(typeof tamanho === 'number'){
         this.tamanho = tamanho
       }else {
         throw new Error('Tamanho inválido')
       } if(typeof preco != 'number'){
         throw new Error('Preço inválido')
       } else {
         this.preco = preco 
       }if(marca === 'Phillips' || marca === 'LG' || marca === 'TLC' || marca === 'Sony'){
         this.marca = marca
       } else {
         throw new Error('Marca inválida')
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
    return `<div>
      <p><span class='size'>${tv.tamanho}</span></p>
      <p>${tv.marca}</p>
      <p>${tv.preco}</p>
      <div>`
  }
}

const tv = new Televisao(42, 'LG', 34543.5)
const tvView = new TelevisaoView();
const render = tvView.renderizar(tv)
console.log(render)