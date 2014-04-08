$(document).ready(function(){

  var borrarEfecto = function(){
    $('.circulo-efecto').each(function(index, valor){
      $(valor).removeClass('circulo-efecto');
      $(valor).addClass('circulo');
    });
    $('.circulo-efecto-peque').each(function(index, valor){
      $(valor).removeClass('circulo-efecto-peque');
      $(valor).addClass('circulo-peque');
    });
  }

  $('#principal').waypoint(function(direction) {
    borrarEfecto();
  },{ offset: '-400'});

  $('#carta-gerente').waypoint(function(direction) {
    borrarEfecto();
    $('#carta').removeClass('circulo');
    $('#carta').addClass('circulo-efecto');
  }, {offset: '40%'});

  $('#principales-logros').waypoint(function(direction) {
    borrarEfecto();
    $('#logros').removeClass('circulo');
    $('#logros').addClass('circulo-efecto');
  });

  $('#valor-bienestar').waypoint(function(direction) {
    borrarEfecto();
    $('#valor').removeClass('circulo');
    $('#valor').addClass('circulo-efecto');
  });

  $('#radio-saludable').waypoint(function(direction) {
    borrarEfecto();
    $('#consejo').removeClass('circulo-peque');
    $('#consejo').addClass('circulo-efecto-peque');
  });

  $('#proyecto-bdp').waypoint(function(direction) {
    borrarEfecto();
    $('#bdp').removeClass('circulo-peque');
    $('#bdp').addClass('circulo-efecto-peque');
  });

  $('#proyecto-bdp').waypoint(function(direction) {
    borrarEfecto();
    $('#bdp').removeClass('circulo-peque');
    $('#bdp').addClass('circulo-efecto-peque');
  });

  $('#blanco-rojo').waypoint(function(direction) {
    borrarEfecto();
    $('#blanco').removeClass('circulo-peque');
    $('#blanco').addClass('circulo-efecto-peque');
  });

  $('#brigada-emprendedores').waypoint(function(direction) {
    borrarEfecto();
    $('#brigada').removeClass('circulo-peque');
    $('#brigada').addClass('circulo-efecto-peque');
  });

  $('#planta-efluentes').waypoint(function(direction) {
    borrarEfecto();
    $('#planta').removeClass('circulo-peque');
    $('#planta').addClass('circulo-efecto-peque');
  });

  $('#indicadores-gri').waypoint(function(direction) {
    borrarEfecto();
    $('#gri').removeClass('circulo');
    $('#gri').addClass('circulo-efecto');
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
