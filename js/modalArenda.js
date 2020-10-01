var arenda = document.getElementById('arenda');
var button = document.getElementById('myArenda');
var spanArenda = document.getElementsByClassName("close_arenda")[0];

button.onclick = function () {
    arenda.style.display = "block";
}
spanArenda.onclick = function () {
    arenda.style.display = "none"
}

window.onclick = function (event) {
    if (event.target == arenda) {
        arenda.style.display = "none"
    }
}

$('input').each(function(){
    var counter = 0;
    var $this = $(this);
    $(this).prev().on('click', function(){
        if($this.attr('name') == 'year' && counter <2020){
            counter = 2020;
        }
        counter++;
        if($this.attr('name') == 'day' && counter > 31){
            counter = 31;
        }else if($this.attr('name') == 'year' && counter > 2200){
            counter = 2200;
        }
        if ($this.attr('name') == 'month' && counter > 12){
            counter = 12;
        }
        $this.val(counter)
    });
    $(this).next().on('click',function(){
        counter--;
        if($this.attr('name') == 'day' && counter < 1){
            counter = 1;

        }else if($this.attr('name') == 'year' && counter < 2020){
            counter = 2020;
        }
        if($this.attr('name') == 'month' && counter < 1){
            counter = 1;

        }
        $this.val(counter)
    })
})

