// This will allow the user to sort through the events
// in a variety of ways and display selective ones

// Creates an object for the various events
// "cat" is the category of the term
function event( name, description, cat, cat2 )
{
	this.name = name;
	this.description = description;
	this.cat = cat;
	this.cat2 = cat2;
}

// An initially empty array to store info
// as read in later
var eventByLine = [];

/**
 * Reads in all of the events from the file to be used
 * in future searching
 */
function loadEvents()
{
	// Prepares a variable to store the text from the file
	var text = readTextFile( "scripts/Events.txt" );
	
	// Splits the text file into individual lines, storing
	// these values in an array
	eventByLine = text.split( "\n" );
}

/** 
 * Finds the appropriate, searched-for events
 * @param #catType
 *		The type of categorization method
 * @param #searchFor
 *		What we're searching for!
 */
function searchEvents( catType, searchFor )
{
	// Create an array of all the terms
	var itemList = [];
	
	// Add the items from the .txt file to the array of terms
	for ( var i = 3; i < eventByLine.length; i += 4 )
		itemList.push( new event( eventByLine[ i - 3 ], eventByLine[ i - 2 ], eventByLine[ i - 1 ], eventByLine[ i ] ) );

	// Sorts the list alphabetically
	itemList.sort( function( a, b ) { return a.name > b.name ? 1 : ( a.name < b.name ? -1 : 0 ); } );

	// Clear all the previously added events
	while ( document.getElementById( "eventTable" ).rows.length > 0 )
		document.getElementById( "eventTable" ).deleteRow( 0 );

	//
	// Begin the actual searching
	//

	// Add all the terms and then jump out of the method
	if ( catType == 'printAll' )
	{
		// Go backwards so that final event list is alphabetical
		for ( var i = itemList.length - 1; i >= 0; i-- )
			appendEvent( itemList[ i ] );
		document.getElementById( "eventinfo" ).innerHTML = "Here are all the events alphabetically. Select a categorization method to narrow your search down further.";
		
		// Jump out of the method
		return;
	}

	// If the events are being selected based off of the first letter of the event
	document.getElementById( "eventinfo" ).innerHTML = "Events with names starting with \"" + searchFor + "\"";

	if (catType == 'alpha' )
	{
		// Go backwards so that final event list is alphabetical (terms are added to the top of the table)
		for ( var i = itemList.length - 1; i >= 0; i-- )
		{
			// If the first letter of the event is what we're searching for
			if ( searchFor == itemList[ i ].name.charAt( 0 ) )
			{
				appendEvent( itemList[ i ] );
			}
		}
	}

	// If the events are being selected by general category
	else if (catType == 'general' )
	{
		document.getElementById( "eventinfo" ).innerHTML = "Events under the category \"" + searchFor + "\"";

		// Go backwards so that final event list is alphabetical
		for ( var i = itemList.length - 1; i >= 0; i-- )
		{
			// If either category of the event matches the category being searched for
			if ( searchFor == itemList[ i ].cat || searchFor == itemList[ i ].cat2 )
			{
				appendEvent( itemList[ i ] );
			}
		}
	}

	// Utilization of the search bar
	else if ( catType == 'searchbar' )
	{
		// Finds search field input
		searchFor = document.getElementById( "searchEvents" ).value.toLowerCase();

		document.getElementById( "eventinfo" ).innerHTML = "Search results for \"" + searchFor + "\"";

		// Go backwards so that final event list is alphabetical
 		for ( var i = itemList.length - 1; i >= 0; i-- )
 		{
 			if ( itemList[ i ].name.toLowerCase().indexOf( searchFor ) > -1 ||
 				itemList[ i ].description.toLowerCase().indexOf( searchFor ) > -1 )
 				appendEvent( itemList[ i ] );
 		}
	}
}

/**
 * Add the selected event to the page
 * @param #item
 *		The event to be added to the table
 */
function appendEvent( item )
{
	// Add a new row to the table below that's already been added
	// Avoid the heading row
	var newRow = document.getElementById( "eventTable" ).insertRow( 0 );

	// Add two cells to this new row
 	var termCell = newRow.insertCell( 0 );
 	var defCell = newRow.insertCell( 1 );

 	// Give the new cells their IDs
 	termCell.setAttribute( "class", "event" + item.cat );
 	defCell.setAttribute( "class", "description" );

 	termCell.innerHTML = item.name;
 	defCell.innerHTML = item.description;
}