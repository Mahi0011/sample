// ---------------------------menu bar change responsive--------------------
var a = 0;
let showmenu = () =>{
    let menu = document.getElementById("menu-ul")
    if(a%2!=0){
        menu.style.right = "-10px"
        menu.style.top = "-18px"
        a++
    }else{
        menu.style.right = "-500px"
        a--
    }
}


  // -----------NAVBAR INVISIBLE-----------------
  var p = window.scrollY;
  window.onscroll = function() {
  var c = window.scrollY;
  if(p>100){
    if (p > c) {
      document.getElementById("header").style.top = "0";
    } else {
      document.getElementById("header").style.top = "-100px";
    }
  }
    p = c;
}
// -------------------form submit----------------------
let submit = () =>{
    let name = document.getElementById("fname")
    let email = document.getElementById("fmail")
    let com = document.getElementById("comments")
    console.log("Name :"+name.value)
    console.log("E-mail :"+email.value)
    console.log("Comments :"+com.value)
    name.value=""
    email.value=""
    com.value= ""
}


    //   ------------------NAVBAR LINK COLOR CHANGE ----------------------------------

    window.addEventListener('scroll', function() {
        const hdr = document.getElementsByClassName("nav-link");
        const offsets = Array.from(Array(6), (_, i) => document.getElementById("l" + (i + 1)).offsetTop);
        const top = window.scrollY;
      
        for (let i = 0; i < hdr.length; i++) {
          if (top >= offsets[i] && top <= offsets[i + 1]) {
            hdr[i].style.color = "white";
          } else {
            hdr[i].style.color = "#01b58f";
          }
        }
      });


// ------------------------animation-----------------
window.addEventListener('scroll', function() {
let height = screen.height;
const pos = document.getElementById("about").offsetTop
const scrollpos =Math.round(window.scrollY)
let s = height/2+scrollpos

console.log(pos,s)
let iteml = this.document.getElementById("abt-pic")
let itemr = this.document.getElementById("abt-det")
if(pos >= s || pos >=scrollpos || scrollpos <= pos+height ){
  iteml.style.animationName="content-float-left"
  itemr.style.animationName="content-float-right"
}


})