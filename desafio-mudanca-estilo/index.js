var divPrincipal = document.querySelector('#principal')

var div1 = document.querySelector('#interna1')
var div2 = document.querySelector('#interna2')
var div3 = document.querySelector('#interna3')

divPrincipal.addEventListener("click", function(){
   if(divPrincipal.style.flexDirection == "row"){
      divPrincipal.style.flexDirection = "column"
   }else{
      divPrincipal.style.flexDirection = "row"
   }
})

div1.addEventListener('click',function(){
   div1.style.backgroundColor = "red"
})

div2.addEventListener('click',function(){
   div2.style.backgroundColor = "red"
})

div3.addEventListener('click',function(){
   div3.style.backgroundColor = "red"
})


