"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("jquery");
console.log("dentro de auth controller");
$(() => {
    // Evento boton inicio sesion
    $("#btnInicioSesion").click(() => {
        console.log("dentro del onclick");
        $("#emailSesion").val("");
        $("#passwordSesion").val("");
        //$("#modalSesion").modal("open");
    });
});
