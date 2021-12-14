function media(objeto){
   let valorMedia = 0
   let objetoNum = Object.values(objeto)
   
   for(let i = 0; i < objetoNum.length; i++){
     valorMedia += objetoNum[i]  
   }
   return valorMedia = valorMedia/objetoNum.length
 }  

console.log(media(
   {'matematica': 6,
   'historia': 8,
   'fisica': 9,
   'geografia': 2,
   'quimica': 9}))

function recompensa(boletim1, boletim2, boletim3) {

   let mediaBoletim1 = media(boletim1)
   let mediaBoletim2 = media(boletim2)
   let mediaBoletim3 = media(boletim3)

   if(mediaBoletim1 > mediaBoletim2 && mediaBoletim1 > mediaBoletim3){
      return 'Eu preciso comprar uma bicicleta para meu primeiro filho.'
   } else if (mediaBoletim2 > mediaBoletim1 && mediaBoletim2 > mediaBoletim3){
      return 'Eu preciso comprar uma bicicleta para meu segundo filho.'
   } else if (mediaBoletim3 > mediaBoletim1 && mediaBoletim3 > mediaBoletim2){
      return 'Eu preciso comprar uma bicicleta para meu terceiro filho.'
   } else{
      return 'A bicicleta será dividida'
   }

 }