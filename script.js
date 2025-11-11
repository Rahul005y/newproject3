
let h2 = document.querySelector("h2")
console.dir(h2)

h2.textContent="is some new"
h2.style.background="red"
h2.style.border= "5px solid orange"
h2.style.visibility="false"


// let h1 = document.createElement("h1")
// document.body.appendChild(h1)
// h1.textContent="new thing";


// let img =document.createElement("img")
// document.body.appendChild(img);
// img.setAttribute("src" ,"https://images.unsplash.com/photo-1762496991966-584520e6ff1a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=600")

// img.getAttribute("src")
// img.removeAttribute("src")


let div = document.createElement("div");
let h1 = document.createElement("h1");
let p = document.createElement("p");
let img = document.createElement("img");

h1.textContent="i am listning to music";
p.textContent="very nice song";

img.setAttribute("src" ,"https://images.unsplash.com/photo-1762496991966-584520e6ff1a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=600")


document.body.appendChild(div);
div.appendChild(h1);
h1.appendChild(p)
div.appendChild(img)


div.classList.add("container")
