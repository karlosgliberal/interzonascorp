$(document).ready(function(){
  var borrarClase = function(element){
    console.log('movida');
    // $(element).removeClass('circulo');
    // $(element).addClass('circulo-efecto');
    $('.circulo-efecto').each(function(index, valor){
      $(valor).removeClass('circulo-efecto');
      $(valor).addClass('circulo');
    });
  }

  $('#principal').waypoint(function(direction) {
    borrarClase();
    // $('#carta').removeClass('circulo-efecto');
    // $('#carta').addClass('circulo');
  });

  $('#carta-gerente').waypoint(function(direction) {
    borrarClase();
    $('#carta').removeClass('circulo');
    $('#carta').addClass('circulo-efecto');
  });

  $('#principales-logros').waypoint(function(direction) {
    borrarClase();
    $('#logros').removeClass('circulo');
    $('#logros').addClass('circulo-efecto');
  });

  // $('.tres').waypoint(function(direction) {
  //   $('.lateral > div').removeClass('circuloEfecto');
  //   $('.tres').addClass('circuloEfecto');
  // }); 
  // $('.cuatro').waypoint(function(direction) {
  //   $('.lateral > div').removeClass('circuloEfecto');
  //   $('.cuatro').addClass('circuloEfecto');
  // }); 

});
