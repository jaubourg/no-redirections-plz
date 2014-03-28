( function() {

	var getHref = ( {
		google: function( element ) {
			return element.getAttribute( "data-href" );
		},
		facebook: function( element ) {
			return element.getAttribute( "href" );
		}
	} )[ ( /^[^\.]+\.(google|facebook)\.[^\.]+$/.exec( document.location.host ) || [] )[ 1 ] ];

	if ( getHref ) {
		document.body.onclick = function( event ) {
			var href = event.target && getHref( event.target );
			if ( href ) {
				event.stopImmediatePropagation();
				event.preventDefault();
				document.location = href;
			}
		};
	}

} )();
