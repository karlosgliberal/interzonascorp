$(document).ready(function(){
  $('.carta-item').waypoint(function(direction) {
    $('.lateral > div').removeClass('circulo-efecto');
    $('.carta-item').addClass('circulo-efecto');
  }); 
  $('.dos').waypoint(function(direction) {
    $('.lateral > div').removeClass('circuloEfecto');
    $('.dos').addClass('circuloEfecto');
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
