var arenda = document.getElementById('arenda');
var button = document.getElementById('myArenda');
var spanArenda = document.getElementsByClassName("close_arenda")[0];

button.onclick = function () {
    arenda.style.display = "block";
}
spanArenda.onclick = function () {
    arenda.style.display = "none"
}

window.onclick = function(event){
    if(event.target == arenda ){
        arenda.style.display = "none"
    }
}