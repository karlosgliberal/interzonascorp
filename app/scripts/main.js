$(document).ready(function(){
  $('.uno').waypoint(function(direction) {
    $('.lateral > div').removeClass('circuloEfecto');
    $('.uno').addClass('circuloEfecto');
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
