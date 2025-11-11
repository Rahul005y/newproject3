
let newdiv = document.querySelector(".allcontainer");




function click () {

  let div = document.createElement("div");
  div.classList.add("created-div");

  let h1 = document.createElement("h1");
  let p = document.createElement("p");
  let img = document.createElement("img");

  h1.textContent = "Dynamic Heading";
  p.textContent = "This paragraph and image were created after clicking the box.";
  img.setAttribute(
    "src",
    "https://plus.unsplash.com/premium_photo-1728892768695-ebebed48ff90?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=735"
  );

  div.appendChild(h1);
  div.appendChild(p);
  div.appendChild(img);

  document.body.appendChild(div);

  
};


newdiv.addEventListener("click",click)


newdiv.removeEventListener("click",click)
