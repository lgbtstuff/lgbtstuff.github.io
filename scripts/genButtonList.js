/**
 * Will add list elements horizontally to the specified list
 * @param #addList
 *		The list element onto which the list items will be added
 * @param #listType
 *		What type of terms is this is a list of?
 *		ie. Dictionary terms, historical figures etc.
 * @param #buttonValues
 *		An array of values that the butons will display
 *		and link to the search for
 * @param #catType
 *		The categorization method being applied to the terms
 */
 function genButtonList( addList, listType, buttonValues, catType )
 {
 	// Empty whichever list the buttons are about to be added to
 	clearList( addList );

 	// If categorization type is alphabetical, use the
 	// alphabet for buttons
 	if ( catType == "alpha" )
 	{
 		var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 		buttonValues = alphabet.split("");
 	}

 	// Add all the letters as buttons to the list
 	for ( var i = 0; i < buttonValues.length; i++ )
 	{
 		// Create the new list item
 		var entry = document.createElement( 'li' );

 		// Create the button to be added to the new list element
 		var newButton = document.createElement( 'button' );

 		// The method invocation to be run onclick as represented by a string
 		var toCall = "chooseList( \"" + listType + "\", \"" + buttonValues[ i ] + "\", \"" + catType + "\" )";

 		// Modify the button to contain the category and the correct term linkage
 		newButton.setAttribute( "onclick", toCall );
        newButton.appendChild( document.createTextNode( buttonValues[ i ] ) );
        newButton.setAttribute( "ID", buttonValues[ i ] );

 		// Add the button to the list item
 		entry.appendChild( newButton );

 		// Add the new list item to the list
 		document.getElementById( addList ).appendChild( entry );
 	}
 }

/**
 * Determines what set of terms this list will link to
 * @param #listType
 *		The list element onto which the list items will be added
 * @param #searchLetter
 *		The letter we're searching for
 */
 function chooseList( listType, searchTerm, catType )
 {
 	if ( listType == "dictionary" )
 		return searchDict( catType, searchTerm );
 	if ( listType == "biographies" );	// etc
 }

 /**
  * Clears the specified list
  * @parm #toClear
  *		The ID of the list to be cleared
  */
 function clearList( toClear )
 {
 	var list = document.getElementById( toClear );
 	while( list.firstChild )
 		list.removeChild( list.firstChild );
 }