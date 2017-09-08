/*aquí va tu código*/

$("#btn_add").click(function () {
    guardarDatos();
});
$("#btn_delete").click(function () {
    eliminarDatos();
});

function guardarDatos() {
    localStorage.setItem($("#nombre").val(), '<strong>' + $("#nombre").val() + ':' + '<br></strong>' + $("#comentario").val());
    imprimirDatos();
}

function imprimirDatos() {
    console.log(localStorage);
    let div_coment = $('<div/>', { 'class': 'coment' });
    let coment = $('<p/>');
    let a = localStorage.getItem($("#nombre").val());
    $(coment).append(a);
    $(div_coment).append(coment);
    $("#ale").append(div_coment);
    limpiar();
    setTimeout(function() {
        limpiar();
    }, 600);
}

function eliminarDatos() {
    localStorage.clear();
    $("#ale").empty();
    console.log(localStorage);
}

function limpiar() {
    $('#nombre').val('');
    $('#comentario').val('');
}

window.onload = function () {
    if (localStorage.length > 0) {
        for (var i in localStorage) {
            let div_coment = $('<div/>', { 'class': 'coment' });
            let coment = $('<p/>');
            let a = localStorage[i];
            $(coment).append(a);
            $(div_coment).append(coment);
            $("#ale").append(div_coment);
        }
    }
}