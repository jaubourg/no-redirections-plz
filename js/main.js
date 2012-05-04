if ( /^[^\.]+\.(?:google|facebook)\.[^\.]+$/.test( document.location.host ) ) {
	(function main() {
		var anchors = document.querySelectorAll( "a[onmousedown]" ),
			i, length;
		for( i = 0, length = anchors.length; i < length; anchors[ i++ ].removeAttribute( "onmousedown" ) );
		setTimeout( main, 1000 );
	})();
}