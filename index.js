let menu = document.getElementById('bars');
let nav = document.getElementById('navbar');
const searchbox = document.getElementById('searchbox');

menu.onclick = () =>{
 menu.classList.toggle("fa-times");
 nav.classList.toggle('active');
}
function search(){
if (searchbox.style.display = 'none') {
 searchbox.style.display = 'block';
} else {
 searchbox.style.display = 'none';
}
}