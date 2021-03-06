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
  $('#user-form').hide();
  $('#final-section').hide();
  
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
$(".sign-up-dis").click(function(){
    var code = "";
    var str = "123456789";
    for (var i = 0; i < 3; i++) {
      code += str.charAt(Math.floor(Math.random() * str.length));
    }
    alert("Tu código: LAB-" + code);
  $("#verify").hide();
  $("#verified").show();
});

/*
*Al clickear el botón next, pasa a la siguiente pantalla
*/
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

/*
*Función para re-generar el código
*/
$('.resend-btn').click(function(){
  newCode ="";
  var str = "123456789";
  for (var i=0; i < 3; i++){
    newCode += str.charAt(Math.floor(Math.random() * str.length));
  }
  alert("Tu código: LAB-" + newCode)
});


/*
*Función para habilitar y deshabilitar el botón next
*Y así dar paso al formulario del usuario
*/
$(".lab-input").keyup(function () {
  if($(this).val().length == 3) {
    $(".btn-next-verified").removeAttr("disabled");
    $('.btn-next-verified').removeClass('disabled');

/*
*Botón se deshabilita si no son 3 caracteres
*/
}else if($(this).val().length < 3){
  $(".btn-next-verified").attr("disabled", "disabled");
}
});

$('.btn-next-verified').click(function(){
  $('#verify').hide();
  $('#user-form').show();
});

/*
*función para volver a la pantalla de verificación
*/
$('.flechita3').click(function(){
  $('#verify').show();
  $('#user-form').hide();
});

/*
*Vuelve a la página del formulario
*/
$('.flechita4').click(function(){
  $('#user-form').show();
  $('#final-section').hide();
});

$('.ticked').click(function(){
  $('.btn-next-final').removeAttr("disabled");
  $('.btn-next-final').removeClass('disabled');
});

$('.btn-next-final').click(function(){
  $('#user-form').hide();
  $('#final-section').show();
});


}); //Fin de la función principal.





/*glyphicon glyphicon-user 
glyphicon glyphicon-envelope*/