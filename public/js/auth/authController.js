"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("jquery");
require("materialize");
console.log("dentro de auth controller");
$(document).ready(function () {
    $(".modal").modal();
    // Evento boton inicio sesion
    $("#btnInicioSesion").click(() => {
        console.log("dentro del onclick");
        $("#emailSesion").val("");
        $("#passwordSesion").val("");
        $("#modalSesion").modal("open");
    });
});
