const resultadoFinal = document.querySelector('.resultadoFinal');
const confirmaResultadp = document.querySelector(' .igual ');

function espaco() {
    if(resultado.textContent){
        let result = document.getElementById('resultado').innerHTML
        resultadoFinal.innerHTML = result.substring(0, result.length - 1);
    } 
}
function insere( valor ){
    resultadoFinal.innerHTML += valor;
}
function clean() {
    resultadoFinal.innerHTML = ' ';
}
function confirma() {
    if(resultadoFinal.textContent != 'Erro') {
        document.getElementById("resultado").innerHTML = eval(resultadoFinal.innerHTML)
    }
}