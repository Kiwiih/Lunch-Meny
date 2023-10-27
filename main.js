const btn = document.getElementById("btn");

btn.addEventListener("click", menyPopup)

function menyPopup(){
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}