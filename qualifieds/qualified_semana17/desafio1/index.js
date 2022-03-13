
let count = 0

let p = document.querySelector(".counter")
let increment = document.querySelector(".increment")
let decrement = document.querySelector(".decrement")

function incrementCounter(){
   count++
   p.textContent = count
}
 
 function decrementCounter(){
   count--
   p.textContent = count
 }

increment.addEventListener("click", () => {
  incrementCounter()
})

decrement.addEventListener("click", () => {
  decrementCounter()
})