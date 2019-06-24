$(document).ready(function () {
  $("#cargar").click(function () {
    $.ajax({
      type: "post",
      url: "peliculas.json",
      dataType: "json",
      success: function (respuesta) {
        // console.log(respuesta);
        /*
          1.- Miramos cuántas películas me vienen
              respuesta.peliculas.length
          2.- Por cada película, creamos un contenedor que ocupe 6 columnas
          3.- Creamos una lista no ordenada
          4.- Por cada propiedad de la película, creamos un elemento <li>
        */
        for (let i = 0; i < respuesta.peliculas.length; i++) {
          $("#main").append("<div class='col-sm-6 text-justify' id='peli" + (i + 1) + "' S></div>");
          $("#peli" + (i + 1)).append("<ul id='datos" + (i + 1) + "'></ul>");
          $("#datos" + (i + 1)).append("<li>" + respuesta.peliculas[i].titulo + "</li>");
          $("#datos" + (i + 1)).append("<li>" + respuesta.peliculas[i].director + "</li>");
          $("#datos" + (i + 1)).append("<li>" + respuesta.peliculas[i].anio + "</li>");
          $("#datos" + (i + 1)).append("<li>" + respuesta.peliculas[i].sipnopsis + "</li>");
        }
      },
      error: function (err) {
        console.log("Se ha producido un error.");
      }
    });
  });
});