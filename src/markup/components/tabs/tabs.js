'use strict';
( function () {
  
  var Tabs = function ( obj ) {
  
    //private properties
    var _tabs = obj,
    		_tabsTitle = document.getElementsByClassName( 'tabs__title' ),
    		_tabsContent = document.getElementsByClassName( 'tabs__content' );


    //private methods
    var _constructor = function () {

          _onEvents();
    
        },
    _onEvents = function () {
    

    	for ( var i = _tabsTitle.length; i--;){

    		_tabsTitle[i].addEventListener( 'click', function(){

    			_initTab( this );


    		},false );

    	};
        
    }, 
    _initTab = function ( thisEl ) {

    	var childIndex = function( element ){

      			var index;
	
      			for ( var i = _tabsTitle.length; i--;){
	
      	  		if ( element == _tabsTitle[i] ) index = i;
	
      			}
	
      				return index;

    			}(thisEl);

    	for ( var i = _tabsTitle.length; i--; ){

    		_tabsTitle[i].className = 'tabs__title';

    	};

    	thisEl.className = 'tabs__title active';

    	for ( var i = _tabsContent.length; i--; ){

    		_tabsContent[i].className = 'tabs__content';

    	};

    	_tabsContent[childIndex].className = 'tabs__content active';

    };
  
    _constructor();
  
  },

  tabs = document.getElementsByClassName( 'tabs' );

  for ( var i = tabs.length; i--;) {

    new Tabs ( tabs[i] );

  }

  
} ) ();
