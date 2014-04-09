/*-----------------------------------------------------------------------------------*/
/*  Scroll smoth
/*-----------------------------------------------------------------------------------*/
$(function() {
  $('li a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top-51
        }, 1500, "easeOutBack");
        page(target.selector);
        return false;
      }
    }
  });
});

/*-----------------------------------------------------------------------------------*/
/*  Sistema de menu dinamico
/*-----------------------------------------------------------------------------------*/
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
        console.log('movida');
      if (direction === 'down') {
          borrarEfecto();
          borrarCrearClases(id, peque);
      }
      },{
        offset: '30%'
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
  },{ offset: '30%'});

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

  var $brigadaEmprendedores = $('#brigada-emprendedores');
  var idCirculo = '#brigada';
  peque = '-peque';
  sistemaWaypoint(idCirculo, $brigadaEmprendedores, peque);

  var $plantaEfluentes = $('#planta-efluentes');
  var idCirculo = '#planta';
  peque = '-peque';
  sistemaWaypoint(idCirculo, $plantaEfluentes, peque);

  var $plantaEfluentes = $('#indicadores-gri');
  var idCirculo = '#indicadores';
  peque = '';
  sistemaWaypoint(idCirculo, $plantaEfluentes, peque);

  /*-----------------------------------------------------------------------------------*/
/*  GO TO TOP
/*-----------------------------------------------------------------------------------*/
! function (a, b, c) {
    a.fn.scrollUp = function (b) {
        a.data(c.body, "scrollUp") || (a.data(c.body, "scrollUp", !0), a.fn.scrollUp.init(b))
    }, a.fn.scrollUp.init = function (d) {
        var e = a.fn.scrollUp.settings = a.extend({}, a.fn.scrollUp.defaults, d),
            f = e.scrollTitle ? e.scrollTitle : e.scrollText,
            g = a("<a/>", {
                id: e.scrollName,
                href: "#top",
                title: f
            }).appendTo("body");
        e.scrollImg || g.html(e.scrollText), g.css({
            display: "none",
            position: "fixed",
            zIndex: e.zIndex
        }), e.activeOverlay && a("<div/>", {
            id: e.scrollName + "-active"
        }).css({
            position: "absolute",
            top: e.scrollDistance + "px",
            width: "100%",
            borderTop: "1px dotted" + e.activeOverlay,
            zIndex: e.zIndex
        }).appendTo("body"), scrollEvent = a(b).scroll(function () {
            switch (scrollDis = "top" === e.scrollFrom ? e.scrollDistance : a(c).height() - a(b).height() - e.scrollDistance, e.animation) {
            case "fade":
                a(a(b).scrollTop() > scrollDis ? g.fadeIn(e.animationInSpeed) : g.fadeOut(e.animationOutSpeed));
                break;
            case "slide":
                a(a(b).scrollTop() > scrollDis ? g.slideDown(e.animationInSpeed) : g.slideUp(e.animationOutSpeed));
                break;
            default:
                a(a(b).scrollTop() > scrollDis ? g.show(0) : g.hide(0))
            }
        }), g.click(function (b) {
            b.preventDefault(), a("html, body").animate({
                scrollTop: 0
            }, e.topSpeed, e.easingType)
        })
    }, a.fn.scrollUp.defaults = {
        scrollName: "scrollUp",
        scrollDistance: 300,
        scrollFrom: "top",
        scrollSpeed: 300,
        easingType: "linear",
        animation: "fade",
        animationInSpeed: 200,
        animationOutSpeed: 200,
        scrollText: "Scroll to top",
        scrollTitle: !1,
        scrollImg: !1,
        activeOverlay: !1,
        zIndex: 2147483647
    }, a.fn.scrollUp.destroy = function (d) {
        a.removeData(c.body, "scrollUp"), a("#" + a.fn.scrollUp.settings.scrollName).remove(), a("#" + a.fn.scrollUp.settings.scrollName + "-active").remove(), a.fn.jquery.split(".")[1] >= 7 ? a(b).off("scroll", d) : a(b).unbind("scroll", d)
    }, a.scrollUp = a.fn.scrollUp
}(jQuery, window, document);

$(document).ready(function () {
    $.scrollUp({
        scrollName: 'scrollUp', // Element ID
        scrollDistance: 300, // Distance from top/bottom before showing element (px)
        scrollFrom: 'top', // 'top' or 'bottom'
        scrollSpeed: 600, // Speed back to top (ms)
        easingType: 'linear', // Scroll to top easing (see http://easings.net/)
        animation: 'fade', // Fade, slide, none
        animationInSpeed: 200, // Animation in speed (ms)
        animationOutSpeed: 200, // Animation out speed (ms)
        scrollText: '<i class="glyphicon glyphicon-arrow-up"></i>', // Text for element, can contain HTML
        scrollTitle: false, // Set a custom <a> title if required. Defaults to scrollText
        scrollImg: false, // Set true to use image
        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
        zIndex: 1001 // Z-Index for the overlay
    });
});

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

  // $('#brigada-emprendedores').waypoint(function(direction) {
  //   borrarEfecto();
  //   $('#brigada').removeClass('circulo-peque');
  //   $('#brigada').addClass('circulo-efecto-peque');
  // });

  // $('#planta-efluentes').waypoint(function(direction) {
  //   borrarEfecto();
  //   $('#planta').removeClass('circulo-peque');
  //   $('#planta').addClass('circulo-efecto-peque');
  // });

  // $('#indicadores-gri').waypoint(function(direction) {
  //   borrarEfecto();
  //   $('#gri').removeClass('circulo');
  //   $('#gri').addClass('circulo-efecto');
  // });


  // $('.tres').waypoint(function(direction) {
  //   $('.lateral > div').removeClass('circuloEfecto');
  //   $('.tres').addClass('circuloEfecto');
  // }); 
  // $('.cuatro').waypoint(function(direction) {
  //   $('.lateral > div').removeClass('circuloEfecto');
  //   $('.cuatro').addClass('circuloEfecto');
  // }); 

});
