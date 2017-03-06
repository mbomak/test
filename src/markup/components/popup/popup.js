"use strict";

( function () {

  $( function() {

    $.each( $( '.popup__form' ), function() {
       
      new  Validate ( $( this ) );
       
    } );

  } );

    
  var Validate = function ( obj ) {
  
    //private properties
    var _form = obj;

    //private methods
    var _constructor = function () {
    
        _validateForm();
    
    },
    _validateForm = function () {
    
      _form.validate(); 
  
    };

    _constructor ();
  
  };

} ) ();