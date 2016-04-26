/**
 * Opens a specified tab and closes the others!
 * Used for the history page
 * @param #ID
 *		The ID of the tab being displayed
 */
function openTab( ID )
{
	// An array of all the potential tabs
    var tabs = document.getElementsByClassName( "tab" );

    // Hide information from other tabs
    for ( var i = 0; i < x.length; i++ )
        tabs[ i ].style.display = "none"; 

    // Display the selected tab
    document.getElementById( ID ).style.display = "block"; 
}