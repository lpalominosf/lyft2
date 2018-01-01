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
  
  /*
  *Tiempo en que demora en aparecer la segunda pantalla
  */
  setTimeout(function(){
  $('.second-screen').show();
  }, 3000);


}); //Fin de la función principal.