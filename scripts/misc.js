// Reads in a text file
// Many Thanks to Stack Overflow :)
function readTextFile( file )
{
    var rawFile = new XMLHttpRequest();
    var allText;
    rawFile.open( "GET", file, false );
    rawFile.onreadystatechange = function ()
    {
        if( rawFile.readyState === 4 )
        {
            if( rawFile.status === 200 || rawFile.status == 0 )
            {
                allText = rawFile.responseText;
            }
        }
    }
    rawFile.send( null );
    return allText;
}

//
// Dictionary Search Bar Listener
//

/**
 * Executes "searchDict( "searchbar", "" )" if the user presses enter
 * while selecting the element with id "searchText"
 * Will correctly pass function arguments only if there
 * are between 0 and 5 of them, inclusive
 */
function checkForEnter()
{
    document.getElementById( "searchText" ).addEventListener( "keypress", function ( e ) {
        
        // Determine the key that was pressed
        var key = e.which || e.keyCode;

        // 13 is Enter
        if (key === 13)
            searchDict( "searchbar", "" );
    } );
}

//
// History Page Tabs
//

/**
 * Opens a specified tab and closes the others!
 * Used for the history page
 * @param #ID
 *      The ID of the tab being displayed
 */
function openTab( ID )
{
    // Clear any tabs already being displayed
    clearTabs();

    // Display the selected tab
    document.getElementById( ID ).style.display = "block"; 
}

/**
 * Clears any displayed tabs from the screen
 */
 function clearTabs()
 {
    // An array of all the potential tabs
    var tabs = document.getElementsByClassName( "tab" );

    // Hide information from other tabs
    for ( var i = 0; i < tabs.length; i++ )
        tabs[ i ].style.display = "none";
 }