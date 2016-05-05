//
// History Page Timeline Hovering
//

// The tooltip currently being displayed
var current = null;

/**
 * Will display the specified tooltip when
 * the corresponding portion of the timeline
 * is hovered over
 * @param #tooltipNum
 *     The number of the tooltip to display
 */
function displayTooltip( tooltipNum )
{
    // An array of all the timeline tooltips
    var tooltips = readTextFile( "scripts/Timeline.txt" ).split( "\n" );

    // Create a new span element and set it to the currently viewed tooltip
    current = document.createElement( "span" );

    for ( var i = 2; i <= tooltips.length;  i += 2 )
    {
        if ( i / 2 == tooltipNum )
        {
            current.appendChild( document.createElement( "h1" ).createTextNode( tooltips[ i - 2 ] ) );
            current.appendChild( createTextNode( tooltips[ i - 1 ] ) );
        }
    }

    // Set the class of the tooltip (for styling to take effect)
    current.setAttribute( "class", "tooltip" );

    // Add the tooltip to the body of the page
    document.body.appendChild( current );
}


// Move the selected tooltip with the mouse
window.onmousemove = function (e)
{
    current.style.top = ( e.clientY + 20 ) + 'px';
    current.style.left = ( e.clientX + 20 ) + 'px';
};