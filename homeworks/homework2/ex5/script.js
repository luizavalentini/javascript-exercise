var numero1 = document.querySelector('#numero1')
var numero2 = document.querySelector('#numero2')
var resultado = document.querySelector('span')

function somar(){
    resultado.innerHTML = parseInt(numero1.value) + parseInt(numero2.value);
}
function subtrair(){
    resultado.innerHTML = parseInt(numero1.value) - parseInt(numero2.value);
}

function multiplicar(){
    resultado.innerHTML = parseInt(numero1.value) * parseInt(numero2.value);
}

function dividir(){
    resultado.innerHTML = parseInt(numero1.value) / parseInt(numero2.value);
}