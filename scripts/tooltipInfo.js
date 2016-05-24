/** This file is used to edit the info on the legislation map page */

// The text to be read in from a file, split by line
var text = [];

// Initial reading in of the text file
function stateSetUp()
{
	// Splits the text file into individual lines, storing
	// these values in an array
	text = readTextFile( "scripts/Legislation_Info.txt" ).split( "\n" );
}

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

	for ( var i = 6; i < text.length; i += 7 )
	{
		if ( text[ i - 6 ] == state )
			info = text[ i - 5 ] + "<br>" + text[ i - 4 ] + "<br>" + text[ i - 3 ] + "<br>" + text[ i - 2 ] + "<br>" + text[ i - 1 ];
	}

 	document.getElementById( "tooltipHeader" ).innerHTML = state;
 	document.getElementById( "tooltip" ).innerHTML = info;
}