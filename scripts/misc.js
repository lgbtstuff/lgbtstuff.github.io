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
 * @param #search
 *      The type of data to search
 */
function checkForEnter( search )
{
    document.getElementById( "searchText" ).addEventListener( "keypress", function ( e ) {
        
        // Determine the key that was pressed
        var key = e.which || e.keyCode;

        // 13 is Enter
        if ( key === 13 )
        {
            // These can be combined into one command since these are on different pages
            if ( search == "dict" )
                searchDict( "searchbar", "" );
            if ( search == "bio" )
                searchBios( "searchbar", "" );
        }
    } );

    if ( search == "event" )
    {
        document.getElementById( "searchText" ).addEventListener( "keypress", function ( e ) {
        
            // Determine the key that was pressed
            var key = e.which || e.keyCode;

            // 13 is Enter
            if ( key === 13 )
            {
                searchEvents( "searchbar", "" );
            }
        } );
    }

    if ( search == "organization" )
    {
        document.getElementById( "searchText" ).addEventListener( "keypress", function ( e ) {
        
            // Determine the key that was pressed
            var key = e.which || e.keyCode;

            // 13 is Enter
            if ( key === 13 )
            {
                searchOrganizations( "searchbar", "" );
            }
        } );
    }
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
    clear( "tab" );

    // Display the selected tab
    document.getElementById( ID ).style.display = "block"; 
}

/**
 * Clears any of the item with the class @param #clss
 * @param #clss
 *      The class of the items being "cleared"
 *      (set to display: none)
 */
function clear( clss )
{
    // An array of all the potential tabs
    var tabs = document.getElementsByClassName( clss );

    // Hide information from other tabs
    for ( var i = 0; i < tabs.length; i++ )
        tabs[ i ].style.display = "none";
}


//
// For the legislation map and timeline
//

/**
 * Generates all of an image maps mouseover "area" elements
 * @param #image
 *      True: This is for the legislation map
 *      False: This is for the timeline
 * @param #coords
 *      An array of the coordinates of the top left
 *      corner of each image area to be generated
 */
function genImageMapArea( image, coords )
{
    // An array of all the US state names, alphabetically
    var states = [ "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming" ];

    // Add all of the areas with the specified coordinates
    for ( var i = 0; i < coords.length; i += 2 )
    {
        // Create the new clickable area
        var newArea = document.createElement( 'area' );

        // For the legislation map
        if ( image == true )
        {
            // Modify the area to contain the alternative text, shape, and the correct state linkage
            var toCall = "tooltipInfo( \"" + states[ i / 2 ] + "\" )";

            newArea.setAttribute( "onmouseover", toCall );
            newArea.setAttribute( "shape", "rect" );
            newArea.setAttribute( "alt", states[ i / 2 ] );

            // Add the correct coordinates to the new image map area
            var coordinates = "" + coords[ i ] + ", " + coords[ i + 1 ] + ", " + ( coords[ i ] + 60 ) + ", " + ( coords[ i + 1 ] + 60 );
            newArea.setAttribute( "coords", coordinates );

            // Add the image area to the correct image map
            document.getElementById( "legislationMap" ).appendChild( newArea );
        } else // For the timeline
        {
            // Modify the area to contain the shape and the correct date linkage
            var toCall = "displayTooltip( " + ( i / 2 ) + " )";

            newArea.setAttribute( "onmouseover", toCall );
            newArea.setAttribute( "onmouseout", "hideTooltip()" );
            newArea.setAttribute( "shape", "rect" );

            // Add the correct coordinates to the new image map area
            var coordinates = "" + coords[ i ] + ", " + coords[ i + 1 ] + ", " + ( coords[ i ] + 30 ) + ", " + ( coords[ i + 1 ] + 30 );
            newArea.setAttribute( "coords", coordinates );

            // Add the image area to the correct image map
            document.getElementById( "timelineMap" ).appendChild( newArea );
        }
    }
}