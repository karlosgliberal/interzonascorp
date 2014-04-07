$(document).ready(function(){
  $('.carta-item').waypoint(function(direction) {
    // $('#movida').removeClass('circulo');
    $('#movida').addClass('efecto');
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
