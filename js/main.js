( function() {

	var getHref = ( {
		google: function( element ) {
			return element.getAttribute( "data-href" );
		},
		facebook: function( element ) {
			var href = element.getAttribute( "href" );
			if ( !/^\/ajax\//.test( href ) ) {
				return href;
			}
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
