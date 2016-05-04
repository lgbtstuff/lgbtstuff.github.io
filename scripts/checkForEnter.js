/**
 * Executes "searchDict( "searchbar", "" )" if the user presses enter
 * while selecting the element with id "searchText"
 * Will correctly pass function arguments only if there
 * are between 0 and 5 of them, inclusive
 */
function checkForEnter()
{
	document.getElementById( id ).addEventListener( "keypress", function ( e ) {
    	
    	// Determine the key that was pressed
    	var key = e.which || e.keyCode;

    	// 13 is Enter
    	if (key === 13)
    		searchDict( "searchbar", "" );
    } );
}