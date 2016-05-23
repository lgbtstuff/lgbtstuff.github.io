// This will allow the user to sort through the organizations
// in a variety of ways and display selective ones

// Creates an object for the various organizations
// "cat" is the category of the term
function organization( name, description, location, startDate, endDate )
{
	this.name = name;
	this.description = description;
	this.location = location;
	this.startDate = startDate;
	this.endDate = endDate;
}

// An initially empty array to store info
// as read in later
var organizationByLine = [];

/**
 * Reads in all of the organizations from the file to be used
 * in future searching
 */
function loadOrganizations()
{
	// Prepares a variable to store the text from the file
	var text = readTextFile( "scripts/Organizations.txt" );
	
	// Splits the text file into individual lines, storing
	// these values in an array
	organizationByLine = text.split( "\n" );
}

/**
 * Finds the appropriate, searched-for organizations
 * @param #catType
 *		The type of categorization method
 * @param #searchFor
 *		What we're searching for!
 */
function searchOrganizations( catType, searchFor )
{
	// Create an array of all the terms
	var itemList = [];
	
	// Add the items from the .txt file to the array of terms
	for ( var i = 3; i < organizationByLine.length; i += 5 )
		itemList.push( new organization( organizationByLine[ i - 3 ], organizationByLine[ i - 2 ], organizationByLine[ i - 1 ], parseInt( organizationByLine[ i ].substring( 0, organizationByLine.indexOf( " " ) ) ), parseInt( organizationByLine[ i ].substring( organizationByLine.indexOf( " " ) + 1 ) ) ) );

	// Sorts the list alphabetically
	itemList.sort( function( a, b ) { return a.name > b.name ? 1 : ( a.name < b.name ? -1 : 0 ); } );

	// Clear all the previously added organizations
	while ( document.getElementById( "organizationTable" ).rows.length > 0 )
		document.getElementById( "organizationTable" ).deleteRow( 0 );

	//
	// Begin the actual searching
	//

	// Add all the terms and then jump out of the method
	if ( catType == 'printAll' )
	{
		// Go backwards so that final organization list is alphabetical
		for ( var i = itemList.length - 1; i >= 0; i-- )
			appendEvent( itemList[ i ] );
		document.getElementById( "organizationInfo" ).innerHTML = "Here are all the organizations alphabetically. Select a categorization method to narrow your search down further.";
		
		// Jump out of the method
		return;
	}

	// If the organizations are being selected based off of the first letter of the organization
	document.getElementById( "organizationInfo" ).innerHTML = "Organizations with names starting with \"" + searchFor + "\"";

	if (catType == 'alpha' )
	{
		// Go backwards so that final organization list is alphabetical (terms are added to the top of the table)
		for ( var i = itemList.length - 1; i >= 0; i-- )
		{
			// If the first letter of the organization is what we're searching for
			if ( searchFor == itemList[ i ].name.charAt( 0 ) )
			{
				appendEvent( itemList[ i ] );
			}
		}
	}

	// If the organizations are being selected by location
	else if ( catType == 'location' )
	{
		document.getElementById( "organizationInfo" ).innerHTML = "Organizations found in  \"" + searchFor + "\"";

		// Go backwards so that final organization list is alphabetical
		for ( var i = itemList.length - 1; i >= 0; i-- )
		{
			// If either category of the organization matches the category being searched for
			if ( searchFor == itemList[ i ].location )
			{
				appendEvent( itemList[ i ] );
			}
		}
	}

	// If the organizations are being selected by date
	else if ( catType == 'date' )
	{
		document.getElementById( "organizationInfo" ).innerHTML = "Organizations found in the time period \"" + searchFor + "\"";

		// Go backwards so that final organization list is alphabetical
		for ( var i = itemList.length - 1; i >= 0; i-- )
		{
			// If the date range of the organization overlaps the selected range
			/* if ( ( itemList[ i ].startDate > parseInt( searchFor.substring( 0, searchFor.indexOf( "-" ) - 1 ) )
				&& itemList[ i ].startDate < parseInt( searchFor.substring( searchFor.indexOf( "-" ) + 2 ) ) )
				|| ( itemList[ i ].endDate > parseInt( searchFor.substring( 0, searchFor.indexOf( "-" ) - 1 ) )
				&& itemList[ i ].endDate < parseInt( searchFor.substring( searchFor.indexOf( "-" ) + 2 ) ) )
				|| ( itemList[ i ].startDate < parseInt( searchFor.substring( 0, searchFor.indexOf( "-" ) - 1 ) )
				&& itemList[ i ].endDate > parseInt( searchFor.substring( searchFor.indexOf( "-" ) + 2 ) ) ) ) */
			if ( itemList[ i ].endDate == parseInt ( searchFor ) )
			{
				appendEvent( itemList[ i ] );
			}
		}
	}

	// Utilization of the search bar
	else if ( catType == 'searchbar' )
	{
		// Finds search field input
		searchFor = document.getElementById( "searchOrganizations" ).value.toLowerCase();

		document.getElementById( "organizationInfo" ).innerHTML = "Search results for \"" + searchFor + "\"";

		// Go backwards so that final organization list is alphabetical
 		for ( var i = itemList.length - 1; i >= 0; i-- )
 		{
 			if ( itemList[ i ].name.toLowerCase().indexOf( searchFor ) > -1 ||
 				itemList[ i ].description.toLowerCase().indexOf( searchFor ) > -1 )
 				appendEvent( itemList[ i ] );
 		}
	}
}

/**
 * Add the selected organization to the page
 * @param #item
 *		The organization to be added to the table
 */
function appendEvent( item )
{
	// Add a new row to the table below that's already been added
	// Avoid the heading row
	var newRow = document.getElementById( "organizationTable" ).insertRow( 0 );

	// Add two cells to this new row
 	var termCell = newRow.insertCell( 0 );
 	var defCell = newRow.insertCell( 1 );

 	// Give the new cells their IDs
 	termCell.setAttribute( "class", "organization" + item.cat );
 	defCell.setAttribute( "class", "description" );

 	termCell.innerHTML = item.name;
 	defCell.innerHTML = item.description;
}