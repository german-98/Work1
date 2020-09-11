var UHF = document.getElementById('my-UHF');
var myTX = document.getElementById('myTX');
var spantx = document.getElementsByClassName("close_TX")[0];

myTX.onclick = function () {
    UHF.style.display = "block";
}
spantx.onclick = function () {
    UHF.style.display = "none"
}

window.onclick = function(event){
    if(event.target == UHF ){
        UHF.style.display = "none"
    }
}