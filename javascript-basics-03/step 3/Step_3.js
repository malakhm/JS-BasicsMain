let red = document.querySelector('.red');
let green = document.querySelector('.green');
let blue = document.querySelector('.blue');
let txt = document.getElementById('text');

red.addEventListener('click', function(){
    txt.style.color = 'red';
})

green.addEventListener('click', function(){
    txt.style.color = 'green';
})

blue.addEventListener('click', function(){
    txt.style.color = 'blue';
})