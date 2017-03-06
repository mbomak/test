"use strict";

( function () {

  $( function() {

    $.each( $( '.slider' ), function() {
       
      new  Slider ( $( this ) );
       
    } );

  } );

    
  var Slider = function ( obj ) {
  
    //private properties
    var _slider = obj,
        _document = $( document );

    //private methods
    var _constructor = function () {
    
        _initSlider();
    
    },
    _initSlider = function () {
    
      _slider.slick ( {
            
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
        dots: false,
        arrows: true,
        prevArrow: '<button class="arrowLeft"></button>',
        nextArrow: '<button class="arrowRight"></button>'
            
      } ); 
  
    };

    _constructor ();
  
  };

} ) ();