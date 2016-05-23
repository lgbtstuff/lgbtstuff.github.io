// This will allow the user to sort through the bios
// in a variety of ways and display selective ones

// Creates an object for the various people
// "cat" is the category of the term
function bio( firstName, lastName, description, cat, cat2 )
{
	this.firstName = firstName;
	this.lastName = lastName;
	this.description = description;
	this.cat = cat;
	this.cat2 = cat2;
}

// An initially empty array to store info
// as read in later
var bioByLine = [];

/**
 * Reads in all of the bios from the file to be used
 * in future searching
 */
function loadBios()
{
	// Prepares a variable to store the text from the file
	var text = readTextFile( "scripts/Bios.txt" );
	
	// Splits the text file into individual lines, storing
	// these values in an array
	bioByLine = text.split( "\n" );
}

/** 
 * Finds the appropriate, searched-for terms
 * @param #catType
 *		The type of categorization method
 * @param #searchFor
 *		What we're searching for!
 * @param #sortType
 *		True: sort by last name (default)
 *		False: sort by first name
 */
function searchBios( catType, searchFor, sortType )
{
	// Create an array of all the terms
	var itemList = [];
	
	// Add the items from the .txt file to the array of terms
	for ( var i = 3; i < bioByLine.length; i += 4 )
		itemList.push( new bio( bioByLine[ i - 3 ].substring( 0, bioByLine[ i - 3 ].indexOf( " " ) ), bioByLine[ i - 3 ].substring( bioByLine[ i - 3 ].indexOf( " " ) + 1 ), bioByLine[ i - 2 ], bioByLine[ i - 1 ], bioByLine[ i ] ) );

	// Sorts the list alphabetically, by last or first name
	if ( !sortType )	// Sort by first name
		itemList.sort( function( a, b ) { return a.firstName > b.firstName ? 1 : ( a.firstName < b.firstName ? -1 : 0 ); } );
	else	// Sort by last name
		itemList.sort( function( a, b ) { return a.lastName > b.lastName ? 1 : ( a.lastName < b.lastName ? -1 : 0 ); } );

	// Clear all the previously added bios
	while ( document.getElementById( "bioTable" ).rows.length > 0 )
		document.getElementById( "bioTable" ).deleteRow( 0 );

	//
	// Begin the actual searching
	//

	// Add all the terms and then jump out of the method
	if ( catType == 'printAll' )
	{
		// Go backwards so that final bio list is alphabetical
		for ( var i = itemList.length - 1; i >= 0; i-- )
			appendBio( itemList[ i ] );
		document.getElementById( "bioinfo" ).innerHTML = "Here are all the people alphabetically. Select a categorization method to narrow your search down further.";
		
		// Jump out of the method
		return;
	}

	// If the bios are being selected based off of alphabetization of the first name
	if ( catType == 'alpha1' )
	{
		document.getElementById( "bioinfo" ).innerHTML = "People with first names starting with \"" + searchFor + "\"";

		// Go backwards so that final bio list is alphabetical (terms are added to the top of the table)
		for ( var i = itemList.length - 1; i >= 0; i-- )
		{
			// If sorting by last name, match the first letter of the last name; same thing if searching by first name
			if ( searchFor == itemList[ i ].firstName.charAt( 0 ) )
			{
				appendBio( itemList[ i ] );
			}
		}
	}

	// If the bios are being selected based off of alphabetization of the last name
	if ( catType == 'alpha2' )
	{
		document.getElementById( "bioinfo" ).innerHTML = "People with last names starting with \"" + searchFor + "\"";

		// Go backwards so that final bio list is alphabetical (terms are added to the top of the table)
		for ( var i = itemList.length - 1; i >= 0; i-- )
		{
			// If sorting by last name, match the first letter of the last name; same thing if searching by first name
			if ( searchFor == itemList[ i ].lastName.charAt( 0 ) )
			{
				appendBio( itemList[ i ] );
			}
		}
	}

	// If the bios are being selected by general category
	else if (catType == 'general' )
	{
		document.getElementById( "bioinfo" ).innerHTML = "People under the category \"" + searchFor + "\"";

		// Go backwards so that final bio list is alphabetical
		for ( var i = itemList.length - 1; i >= 0; i-- )
		{
			if ( searchFor == itemList[ i ].cat || searchFor == itemList[ i ].cat2 )
			{
				appendBio( itemList[ i ] );
			}
		}
	}

	// Utilization of the search bar
	else if ( catType == 'searchbar' )
	{
		// Finds search field input
		searchFor = document.getElementById( "searchText" ).value.toLowerCase();

		document.getElementById( "bioinfo" ).innerHTML = "Search results for \"" + searchFor + "\"";

		// Go backwards so that final bio list is alphabetical
 		for ( var i = itemList.length - 1; i >= 0; i-- )
 		{
 			if ( itemList[ i ].firstName.toLowerCase().indexOf( searchFor ) > -1 ||
 				itemList[ i ].lastName.toLowerCase().indexOf( searchFor ) > -1 ||
 				itemList[ i ].description.toLowerCase().indexOf( searchFor ) > -1 )
 				appendBio( itemList[ i ] );
 		}
	}
}

/**
 * Add the selected bio to the page
 * @param #item
 *		The bio to be added to the table
 */
function appendBio( item )
{
	// Add a new row to the table below that's already been added
	// Avoid the heading row
	var newRow = document.getElementById( "bioTable" ).insertRow( 0 );

	// Add two cells to this new row
 	var termCell = newRow.insertCell( 0 );
 	var defCell = newRow.insertCell( 1 );

 	// Give the new cells their IDs
 	termCell.setAttribute( "class", "bio" + item.cat );
 	defCell.setAttribute( "class", "description" );

 	termCell.innerHTML = "" + item.firstName + " " + item.lastName;
 	defCell.innerHTML = item.description;
}