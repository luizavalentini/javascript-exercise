var numero1 = document.querySelector('#numero1')
var numero2 = document.querySelector('#numero2')
var resultado = document.querySelector('span')

function somar(){
    resultado.innerHTML = persentInt(n1.value) + perseInt(n2.value);
}
function subtrair(){
    resultado.innerHTML = persentInt(n1.value) - perseInt(n2.value);
}

function multiplicar(){
    resultado.innerHTML = persentInt(n1.value) * perseInt(n2.value);
}

function dividir(){
    resultado.innerHTML = persentInt(n1.value) / perseInt(n2.value);
}