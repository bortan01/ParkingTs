"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("jquery");
console.log("dentro de auth controller");
$(function () {
  // Evento boton inicio sesion
  $("#btnInicioSesion").click(function () {
    console.log("dentro del onclick");
    $("#emailSesion").val("");
    $("#passwordSesion").val("");
    $("#modalSesion").modal("open");
  });
});
