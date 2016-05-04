/** This file is used to edit the info on the legislation map page */

// The text to be read in from a file, split by line
var text = [];

/**
 * Modifies the content of the legislation map span
 * to contain the correct state's information
 * @param #state
 *		The state whose information needs to be found
 */
 function tooltipInfo( state )
 {
	// Will store the information about that particular state
	var info = "";

	for ( var i = 2; i < text.length; i += 3 )
	{
		if ( text[ i - 2 ] == state )
			info = text[ i - 1 ];
	}

 	document.getElementById( "tooltipHeader" ).innerHTML = state;
 	document.getElementById( "tooltip" ).innerHTML = info;
 }

// Initial reading in of the text file
function stateSetUp()
{
	// Splits the text file into individual lines, storing
	// these values in an array
	text = readTextFile( "scripts/Legislation_Info.txt" ).split( "\n" );
}