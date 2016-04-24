/**
 * Modifies the content of the legislation map span
 * to contain the correct state's information
 * @param #state
 *		The state whose information needs to be found
 */
 function tooltipInfo( state )
 {
 	// Splits the text file into individual lines, storing
	// these values in an array
	var text = readTextFile( "scripts/Legislation_Info.txt" ).split( "\n" );

	// Will store the information about that particular state
	var info = "";

	for ( var i = 2; i < text.length; i += 3 )
	{
		if ( text[ i - 2 ] == state )
			info = text[ i - 1 ];
	}

 	document.getElementByID( "tooltipHeader" ).innerHTML = state;
 	document.getElementByID( "tooltip" ).innerHTML = info;
 }