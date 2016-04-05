// This will allow the user to sort through the dictionary
// in a variety of ways and display selective terms

// Returns a String with the terms being searched for 
// each on separate lines
// To be added to a div on the dictionary page
function search( catType, searchFor )
{
	document.getElementById("terms").innerHTML = "Yay! The clicking works!";
	// Creates a file reader
	var reader = new FileReader();
	
	// Prepares a variable to store the text from the file
	reader.onload = function( e ) { var text = reader.result; }
	
	// Reads in the file of dictionary terms
	reader.readAsText( "Dictionary_Terms.txt" );
	
	// Splits the text file into individual lines, storing
	// these values in an array
	var textByLine = text.split( "\n" );
	
	// Creates an object for the items in the dictionary
	// "cat" is the category of the term
	function item( term, definition, cat )
	{
		this.term = term;
		this.definition = definition;
		this.cat = cat;

		this.toString = function()
		{
			return term + " - " + definition;
		}
	}

	// Create an array of all the terms
	var itemList = [];
	
	// Add the items from the .txt file to the array of terms
	for ( var i = 2; i < textByLine.length; i += 4 )
		itemList.push( new item( textByLine[ i - 2 ], textByLine[ i - 1 ], textByLine[ i ] ) );
	
	// Sorts the list alphabetically
	itemList.sort();
	
	//
	// Begin the actual searching
	//

	// The string that will eventually be returned
	var result;

	// If the terms are being selected based off of alphabetization
	if ( catType == "alpha" )
	{
		for ( var i = 0; i < itemList.length; i++ )
		{
			if ( searchFor == itemList[ i ].term.charAt( 0 ) )
				result += itemList[ i ].toString() + "\n";
		}
	}
	// If the terms are being selected by general category
	else if (catType == "general")
	{
		for ( var i = 0; i < itemList.length; i++ )
		{
			if ( searchFor == itemList[ i ].term.cat )
				result += itemList[ i ].toString() + "\n";
		}
	}

	document.getElementById("terms").innerHTML = "Yay! The clicking works!";
}