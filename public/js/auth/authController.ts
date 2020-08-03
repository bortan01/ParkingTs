import "jquery";
import "materialize";
console.log("dentro de auth controller");

$(document).ready(function () {
  //ESTA LINEA EES NECESARIA PARA INICIALIZAR EL PUTO MODAL
  $(".modal").modal();

  // Evento boton inicio sesion
  $("#btnInicioSesion").click(() => {
    console.log("dentro del onclick");
    $("#emailSesion").val("");
    $("#passwordSesion").val("");
    $("#modalSesion").modal("open");
  });
});
