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
  };

  var borrarCrearClases = function(id, peque){
    $(id).removeClass('circulo'+peque);
    $(id).addClass('circulo-efecto'+peque);
  }

  var sistemaWaypoint = function(id, elemento, peque){
    elemento.waypoint(function(direction) {
      if (direction === 'down') {
          borrarEfecto();
          borrarCrearClases(id, peque);
      }
      },{
        offset: '0'
    });

    elemento.waypoint(function(direction) {
        if (direction === 'up') {
          borrarEfecto();
          borrarCrearClases(id, peque);
        }
      },{
        offset: '0'
    });
  };

  var peque = '';

  $('#principal').waypoint(function(direction) {
    borrarEfecto();
  },{ offset: '0'});

  var $cartaGerente = $('#carta-gerente');
  var idCirculo = '#carta';
  sistemaWaypoint(idCirculo, $cartaGerente, peque);

  var $principalesLogros = $('#principales-logros');
  var idCirculo = '#logros';
  sistemaWaypoint(idCirculo, $principalesLogros, peque);

  var $valorBienestar = $('#valor-bienestar');
  var idValor = '#valor';
  sistemaWaypoint(idValor, $valorBienestar, peque);

  var $radioSaludable = $('#radio-saludable');
  var idCirculo = '#consejo';
  peque = '-peque';
  sistemaWaypoint(idCirculo, $radioSaludable, peque);

  var $proyectoBdp = $('#proyecto-bdp');
  var idCirculo = '#bdp';
  peque = '-peque';
  sistemaWaypoint(idCirculo, $proyectoBdp, peque);

  var $blancoRojo = $('#blanco-rojo');
  var idCirculo = '#blanco';
  peque = '-peque';
  sistemaWaypoint(idCirculo, $blancoRojo, peque);

  // $('#principales-logros').waypoint(function(direction) {
  //   borrarEfecto();
  //   $('#logros').removeClass('circulo');
  //   $('#logros').addClass('circulo-efecto');
  // });

  // $('#valor-bienestar').waypoint(function(direction) {
  //   borrarEfecto();
  //   $('#valor').removeClass('circulo');
  //   $('#valor').addClass('circulo-efecto');
  // });

  // $('#radio-saludable').waypoint(function(direction) {
  //   borrarEfecto();
  //   $('#consejo').removeClass('circulo-peque');
  //   $('#consejo').addClass('circulo-efecto-peque');
  // });

  // $('#proyecto-bdp').waypoint(function(direction) {
  //   borrarEfecto();
  //   $('#bdp').removeClass('circulo-peque');
  //   $('#bdp').addClass('circulo-efecto-peque');
  // });

  // $('#blanco-rojo').waypoint(function(direction) {
  //   borrarEfecto();
  //   $('#blanco').removeClass('circulo-peque');
  //   $('#blanco').addClass('circulo-efecto-peque');
  // });

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
