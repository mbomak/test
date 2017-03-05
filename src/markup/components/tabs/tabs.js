"use strict";
( function () {
  
  var Tabs = function ( obj ) {
  
    //private properties
    var _tabs = obj,
    		_tabsTitle = document.querySelectorAll( '.tabs__title' ),
    		_tabsContent = document.querySelectorAll( '.tabs__content' );


    //private methods
    var _constructor = function () {

          _onEvents();
    
        },
    _onEvents = function () {
    

    	_tabsTitle.forEach( function( el ){

    		el.addEventListener( 'click', function(){

    			_initTab( this );


    		},false );

    	});
        
    }, 
    _initTab = function ( thisEl ) {

    	var childIndex = function( element ){

      			var index;
	
      			for ( var i = _tabsTitle.length; i--;){
	
      	  		if ( element == _tabsTitle[i] ) index = i;
	
      			}
	
      				return index;

    			}(thisEl);

    	_tabsTitle.forEach( function( el ){

    		el.className = 'tabs__title';

    	});

    	thisEl.className = 'tabs__title active';

    	_tabsContent.forEach( function( el ){

    		el.className = 'tabs__content';

    	});

    	_tabsContent[childIndex].className = 'tabs__content active';

    };
  
    _constructor();
  
  };

  document.querySelectorAll( '.tabs' ).forEach( function( item ){

     new Tabs( item );

  });
  
} ) ();
