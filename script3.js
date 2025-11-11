
let select = document.querySelector("select")
let h1 = document.querySelector("h1")


// let opt = document.querySelectorAll("option")

console.log(select)

select.addEventListener("change",function(dets){
    console.log(dets.target.value)
    h1.textContent=`${dets.target.value } is seleted`;
})