document.addEventListener('DOMContentLoaded', inicializarBoton())

function inicializarBoton (){
    document.getElementById('dateBtn').addEventListener('click');
}

function inicializarFecha(){
    var year = new Date().getFullYear();
    document.getElementById('txtDate').value = year;
}

