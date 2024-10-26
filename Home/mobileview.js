
// let menustatus = false;
// function mobileview() {
    
//   if (!menustatus) {
//     document.querySelector(".navigation").style.display = "block";
//     menustatus = true;
//   } else {
//     document.querySelector(".navigation").style.display = "none";
//     menustatus = false;
//   }

// }

function mobileview(){
  document.querySelector(".navigation").classList.toggle("hide");
  
}

 let attr = document.querySelector("h1").setAttribute("title" , "main")

