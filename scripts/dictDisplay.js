// This will allow the user to sort through the dictionary
// in a variety of ways and display selective terms

// Creates an object for the items in the dictionary
// "cat" is the category of the term
function item( term, definition, cat, cat2 )
{
	this.term = term;
	this.definition = definition;
	this.cat = cat;
	this.cat2 = cat2;

	this.toString = function()
	{
		return term + " - " + definition;
	}
}

// An initially empty array to store dictionary terms
// as read in later
var textByLine = [];

/**
 * Reads in all of the terms from the file to be used
 * in future searching
 */
function loadTerms()
{
	// Prepares a variable to store the text from the file
	var text = readTextFile( "scripts/Dictionary_Terms.txt" );
	
	// Splits the text file into individual lines, storing
	// these values in an array
	textByLine = text.split( "\n" );
}

/**
 * Finds the appropriate, searched-for terms
 * @param #catType
 *		The type of categorization method
 * @param #searchFor
 *		What we're searching for!
 */
function searchDict( catType, searchFor )
{
	// Create an array of all the terms
	var itemList = [];
	
	// Add the items from the .txt file to the array of terms
	for ( var i = 3; i < textByLine.length; i += 5 )
		itemList.push( new item( textByLine[ i - 3 ], textByLine[ i - 2 ], textByLine[ i - 1 ], textByLine[ i ] ) );
	
	// Sorts the list alphabetically
	itemList.sort( function( a, b ) { return a.term > b.term ? 1 : ( a.term < b.term ? -1 : 0 ); } );

	//
	// Begin the actual searching
	//

	// Add all the terms and then jump out of the method
	if ( catType == 'printAll' )
	{
		// Go backwards so that final term list is alphabetical
		for ( var i = itemList.length - 1; i >= 0; i-- )
			appendTerm( itemList[ i ] );
		document.getElementById( "termTable" ).rows[ 0 ].cells[ 0 ].innerHTML = "Here are all the terms alphabetically. Select a categorization method to narrow your search down further.";
		
		// Jump out of the method
		return;
	}

	document.getElementById( "termTable" ).rows[ 0 ].cells[ 0 ].innerHTML = "Terms under the category \"" + searchFor + "\"";

	// Clear all the previously added terms
	// Avoid the first row - this is the header
	while ( document.getElementById( "termTable" ).rows.length > 1 )
		document.getElementById( "termTable" ).deleteRow( 1 );

	// If the terms are being selected based off of alphabetization
	if ( catType == 'alpha' )
	{
		// Go backwards so that final term list is alphabetical
		for ( var i = itemList.length - 1; i >= 0; i-- )
		{
			if ( searchFor == itemList[ i ].term.charAt( 0 ) )
			{
				appendTerm( itemList[ i ] );
			}
		}
	}

	// If the terms are being selected by general category
	else if (catType == 'general' )
	{
		// Go backwards so that final term list is alphabetical
		for ( var i = itemList.length - 1; i >= 0; i-- )
		{
			if ( searchFor == itemList[ i ].cat || searchFor == itemList[ i ].cat2 )
			{
				appendTerm( itemList[ i ] );
			}
		}
	}

	// Utilization of the search bar
	else if ( catType == 'searchbar' )
	{
		// Finds search field input
		searchFor = document.getElementById( "searchText" ).value.toLowerCase();

		document.getElementById( "termTable" ).rows[ 0 ].cells[ 0 ].innerHTML = "Search results for \"" + searchFor + "\"";

		// Go backwards so that final term list is alphabetical
 		for ( var i = itemList.length - 1; i >= 0; i-- )
 		{
 			if ( itemList[ i ].term.toLowerCase().indexOf( searchFor ) > -1 ||
 				itemList[ i ].definition.toLowerCase().indexOf( searchFor ) > -1 )
 				appendTerm( itemList[ i ] );
 		}
	}
}

/**
 * Add the selected term to the table of terms
 * @param #item
 *		The term to be added to the table
 */
function appendTerm( item )
{
	// Add a new row to the table below that's already been added
	// Avoid the heading row
	var newRow = document.getElementById( "termTable" ).insertRow( 1 );

	// Add two cells to this new row
 	var termCell = newRow.insertCell( 0 );
 	var defCell = newRow.insertCell( 1 );

 	// Give the new cells their IDs
 	termCell.setAttribute( "class", "term" + item.cat );
 	defCell.setAttribute( "class", "definition" + item.cat );

 	termCell.innerHTML = item.term;
 	defCell.innerHTML = item.definition;
}