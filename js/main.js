( function( protocol, hostname ) {

	var hrefAttribute = ( {
		google: "data-href",
		facebook: "href"
	} )[ ( /^[^\.]+\.(google|facebook)\.[^\.]+$/.exec( hostname ) || [] )[ 1 ] ];

	if ( hrefAttribute ) {
		var anchor = document.createElement( "a" );
		document.body.onclick = function( event ) {
			var element = event.target;
			while( element ) {
				if ( element.tagName === "A" ) {
					break;
				}
				element = element.parentNode;
			}
			if ( element ) {
				anchor.href = element.getAttribute( hrefAttribute );
				if ( anchor.protocol !== protocol || anchor.hostname !== hostname ) {
					event.stopImmediatePropagation();
					event.preventDefault();
					var target = element.getAttribute( "target" );
					if ( target ) {
						window.open( anchor.href, target );
					} else {
						document.location = anchor.href;
					}
				}
			}
		};
	}

} )( document.location.protocol, document.location.host );
