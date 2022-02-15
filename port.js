//navbar displays
function openNav(){
   document.getElementById("mySidenav").style.height = "100%";
  }
  function closeNav(){
   document.getElementById("mySidenav").style.height = "0%";
console.log("open nav")  
}
// fade div
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4000); // Change image every 4 seconds
}

// ---------------fuctional clock
function showTime(){
   var date = new Date();
   var h = date.getHours();
   var m = date.getMinutes();
   var s = date.getSeconds();
   var session = "AM";
   if (h==0){
       h = 12;
   }

   if (h>12){
        h = h-12;
      var session = "PM";
   }

// making 2 numbers
   h = (h<10)?"0"+h:h;
m = (m<10)?"0"+m:m;
s = (s<10)?"0"+s:s;
   // calling var
   document.getElementById("clock")
   .innerHTML = h + ":" + m + ":" +
    s + session;
   setTimeout(showTime,1000);
   }
   showTime();

// scientific calcutor
function clr(){
document.getElementById("result").value="";
}
function display(val){
document.getElementById("result").value+=val;
}
function equate(){
   let x = document.getElementById("result").value;
   let y =eval(x);
   document.getElementById("result").value = y;
}

//validating form
function myFunction() {
   var x = document.getElementById("frm1").method;
   document.getElementById("demo").innerHTML = x;
}
function Boolean(){
2+3;
console.log('boolean')
}

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
 if (event.target == modal) {
  modal.style.display = "none";
 }
}
