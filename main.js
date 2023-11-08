let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let totalEl = document.getElementById("total-el")
let count = 0
let total = 0

function increment(){
  count = count + 1
  countEl.textContent = count
 // console.log(count)
}

function save(){
  let countStr = count + " - "
  saveEl.textContent += countStr
  total = total + count
  countEl.textContent = 0
  count = 0
 // console.log(countStr)
}

function totalBtn(){
   let totalStr = total
   total = total + count
  totalEl.textContent = "Total Entries: " + totalStr 
  //console.log(totalStr)
}