// Galleria start and load Theme
//(function() { 
//    Galleria.loadTheme('galleria/themes/classic/galleria.classic.min.js');
//    Galleria.run('.galleria');
//}());


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
$("#toggle").on( 'click', function () {controller.toggle('id-1')});
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