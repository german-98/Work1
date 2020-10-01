var SX = document.getElementById('my-SX');
var mySX = document.getElementById('mySX');
var spansx = document.getElementsByClassName("close_SX")[0];

mySX.onclick = function () {
    SX.style.display = "block";
}
spansx.onclick = function () {
    SX.style.display = "none"
}

window.onclick = function(event){
    if(event.target == SX ){
        SX.style.display = "none"
    }
}
