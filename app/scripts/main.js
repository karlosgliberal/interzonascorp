$(document).ready(function(){
  var borrarClase = function(){
    $('.circulo-efecto').each(function(index, valor){
      $(valor).removeClass('circulo-efecto');
      $(valor).addClass('circulo');
    });
  }

  $('#principal').waypoint(function(direction) {
    borrarClase();
  },{ offset: '-400'});

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

  $('#valor-bienestar').waypoint(function(direction) {
    borrarClase();
    $('#valor').removeClass('circulo');
    $('#valor').addClass('circulo-efecto');
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
