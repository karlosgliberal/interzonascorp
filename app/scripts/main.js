$(document).ready(function(){

  $('#principal').waypoint(function(direction) {
    $('#carta').removeClass('circulo-efecto');
    $('#carta').addClass('circulo');
  });

  $('#carta-gerente').waypoint(function(direction) {
    $('#carta').removeClass('circulo');
    $('#carta').addClass('circulo-efecto');
  });

  $('#principales-logros').waypoint(function(direction) {
    $('.circulo-efecto').removeClass('.circulo-efecto');
    $('#logros').removeClass('circulo');
    $('#logros').addClass('circulo-efecto');
  });

  $('.tres').waypoint(function(direction) {
    $('.lateral > div').removeClass('circuloEfecto');
    $('.tres').addClass('circuloEfecto');
  }); 
  $('.cuatro').waypoint(function(direction) {
    $('.lateral > div').removeClass('circuloEfecto');
    $('.cuatro').addClass('circuloEfecto');
  }); 
});
