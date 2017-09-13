// Galleria start and load Theme
(function() {
    Galleria.loadTheme('galleria/themes/classic/galleria.classic.min.js');
    Galleria.run('.galleria');
}());

$(document).ready(function(){
	$('#menubtn1').click(function(){
		$(this).toggleClass('is-active');
	});
    $('#menubtn2').click(function(){
		$(this).toggleClass('is-active');
	});
    $('#menubtn3').click(function(){
		$(this).toggleClass('is-active');
	});
    $('#menubtn4').click(function(){
		$(this).toggleClass('is-active');
	});
});

//Panel snap (scroll snapping)
jQuery(function($) {
        $('#site').panelSnap();
});

( function ( $ ) {
  // Initialize Slidebars
  controller = new slidebars();
  controller.init();

} ) ( jQuery );
//controller.toggle( 'id-1' );
$("#menubtn1").on( 'click', function () {controller.toggle('id-1')});
$("#menubtn2").on( 'click', function () {controller.toggle('id-1')});
$("#menubtn3").on( 'click', function () {controller.toggle('id-1')});
$("#menubtn4").on( 'click', function () {controller.toggle('id-1')});
//var page2 = () => {$('.container').panelSnap('snapToPanel', $('.panel_two'))}
//Scroll snap Options
//  jQuery(function($) {
//    var options = {
//      $menu: false,
//      menuSelector: 'a',
//      panelSelector: '> section',
//      namespace: '.panelSnap',
//      onSnapStart: function(){},
//      onSnapFinish: function(){},
//      onActivate: function(){},
//      directionThreshold: 50,
//      slideSpeed: 200,
//      easing: 'linear',
//      offset: 0,
//      navigation: {
//        keys: {
//          nextKey: false,
//          prevKey: false,
//        },
//        buttons: {
//          $nextButton: false,
//          $prevButton: false,
//        },
//        wrapAround: false
//      }
//    };
//
//    $('.panel_container').panelSnap(options);
//  });

$('.p2link').on('click', function() {
  var $target = $('.panel_two');
  $('.container').panelSnap('snapToPanel', $target);
});

$('.p3link').on('click', function() {
  var $target = $('.panel_three');
  $('.container').panelSnap('snapToPanel', $target);
});

$('.p4link').on('click', function() {
  var $target = $('.panel_four');
  $('.container').panelSnap('snapToPanel', $target);
});
//
//$('#p2link').on('click', function() {
//  $('.container').panelSnap('snapTo', 'next');
//});
