function changeColor(newColor){
    const elemnt = document.getElementById('trocar');
    elemnt.innerText = "Está sendo trocado"
}

function reloadPagina(){
    const reload = document.getElementById('reload');
    reload.reload(forcedReload);
}