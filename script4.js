  let inp = document.querySelector(".ip");
    let btn = document.querySelector(".btn");

    btn.addEventListener("click", function() {
      inp.click();
    });


    // inp.addEventListener("change",function(newa){
    //   btn.textContent=newa.target.value
    // })
    
    inp.addEventListener("change",function(newa){
      console.log(newa)
    })


      inp.addEventListener("change",function(newa){

      console.log(newa.target.files[0].name)
  
    }) 


       inp.addEventListener("change",function(newa){
      let file = newa.target.files[0].name
   if(file){
    btn.textContent=file.name
  }
    }) 