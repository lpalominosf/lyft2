/*
*Funcion que se ejecuta al cargar la página
*/
$(document).ready(function(){
  /*
  *Función que ejecuta el preloader
  */
  $('#status').delay(1000).fadeOut('slow');
  $('#preloader').delay(1000).fadeOut();
  $('.second-screen').hide();
  $('#sign-up').hide();
  $('#verify').hide();
  
  /*
  *Tiempo en que demora en aparecer la segunda pantalla
  */
  setTimeout(function(){
  $('.second-screen').show();
  }, 1000);

 /*
  *Evento de click que muestra el botón y esconde mi segunda pantalla
  */
  $('.sign-up').click(function(){
    $('#sign-up').show();
    $('.second-screen').hide();
  });
  $('.sign-up').click(function(){
    $('#verify').hide();
  });

  /*
  *Función para volver a la segunda pantalla
  *No entiendo por qué esta en particular no funciona
  *Solamente funciona con la flecha de la seccion verify
  */
  $('.flechita').click(function(){
    $('#sign-up').hide();
    $('.second-screen').show();
  });


  /*
*Función que deshabilita mi botón
*/
  $("#sign-up-dis").attr("disabled", true);
  $('#sign-up-dis').addClass('disabled');

/*
*Función que me permite deshabilitar el botón 
*hasta que el usuario ingresa 10 caracteres
*/
  $("#inputNumbers").keyup(function () {
  if($(this).val().length == 10) {
    $(".sign-up-dis").removeAttr("disabled");
    $('.sign-up-dis').removeClass('disabled');

/*
*Botón se deshabilita si no son 10 caracteres
*/
}else if($(this).val().length < 10){
  $(".sign-up-dis").attr("disabled", "disabled");
}
});

/*
*Función que nos da el código random
*/
$("#sign-up-dis").click(function(){
    var code = "";
    var str = "123456789";
    for (var i = 0; i < 3; i++) {
      code += str.charAt(Math.floor(Math.random() * str.length));
    }
    alert("Tu código: LAB-" + code);
  $("#verify").hide();
  $("#verified").show();
});


$('.sign-up-dis').click(function(){
  $('#verify').show();
  $('#sign-up').hide();
});

/*
*Volver a la pantalla verify
*/
$('.flechita2').click(function(){
    $('#verify').hide();
    $('#sign-up').show();
  });

}); //Fin de la función principal.





