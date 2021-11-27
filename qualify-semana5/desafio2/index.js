function filtroAmigo(arrayAmigo){
  
  const amigos = arrayAmigo.filter((names) => names.length == 4)

  // for(var i = 0; i <= arrayAmigo.length; i++){
  //   console.log(arrayAmigo[i].length)
  //   if(arrayAmigo[i].length == 4){
  //     amigos.push(arrayAmigo[i])
  //   }
  // }
  return amigos
}