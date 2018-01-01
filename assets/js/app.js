/*
*Funcion que se ejecuta al cargar la página
*/
$(document).ready(function(){
  /*
  *Función que ejecuta el preloader
  */
  $('#status').delay(3000).fadeOut('slow');
  $('#preloader').delay(3000).fadeOut();
  $('.second-screen').hide();
  $('#sign-up').hide();
  
  /*
  *Tiempo en que demora en aparecer la segunda pantalla
  */
  setTimeout(function(){
  $('.second-screen').show();
  }, 3000);

 /*
  *Evento de click que muestra el botón y esconde mi segunda pantalla
  */
  $('.sign-up').click(function(){
    $('#sign-up').show();
    $('.second-screen').hide();
  });
  $('.sign-up').click(function(){

  });



}); //Fin de la función principal.