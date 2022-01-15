function openNav(){
    document.getElementById("mySidenav").style.height = "100%";
   }
   function closeNav(){
    document.getElementById("mySidenav").style.height = "0%";
 console.log("open nav")  
 }
// --------------- clock
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
function myFunction(){
    var x = document.getElementById('l1');
      if (x.style.display === 'block') {
          x.style.display = 'none'
      } else {
          x.style.display = 'block'
      }
  }
function btn(){
    var y = document.getElementById('l2');
      if (y.style.display === 'block') {
          y.style.display = 'none'
      } else {
          y.style.display = 'block'
      }
  }