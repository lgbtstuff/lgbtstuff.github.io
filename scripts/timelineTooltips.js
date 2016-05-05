/** History Page Timeline Hovering */

// All of the tooltips
var tooltips = [];

// Each tooltip has a heading (date) and it's content
function tooltip( heading, content )
{
    this.heading = heading;
    this.content = content;
}

/**
 * Initialize the tooltip values from the text file
 * to the array {@see #tooltips}
 */
function loadTooltips()
{
    // An array of all the timeline tooltips' text
    var tooltipText = readTextFile( "scripts/Timeline.txt" ).split( "\n" );

    // Add all the tooltips to {@see #tooltips}
    for ( var i = 2; i <= tooltipText.length;  i += 2 )
    {
        tooltips.push( new tooltip( tooltipText[ i - 2 ], tooltipText[ i - 1 ] ) );
    }
}


// The tooltip currently being displayed, defaults to an
// empty span element
var current = document.createElement( "span" );

// Set the class of the tooltip (for styling to take effect)
current.setAttribute( "class", "tooltip" );

// The tooltip initializes as invisible
current.style.display = "hidden";

// Add the tooltip to the body of the page
document.body.appendChild( current );

/**
 * Will display the specified tooltip when
 * the corresponding portion of the timeline
 * is hovered over
 * @param #tooltipNum
 *     The number of the tooltip to display
 */
function displayTooltip( tooltipNum )
{
    // Clear the previous tooltip information
    while ( current.firstChild )
    {
        current.removeChild( current.firstChild );
    }

    // Add the info from the tooltip we're looking for to the span
    for ( var i = 0; i < tooltips.length;  i++ )
    {
        if ( i + 1 == tooltipNum )
        {
            current.appendChild( document.createElement( "span" ).appendChild( document.createTextNode( tooltips[ i ].heading ) ) );
            current.appendChild( document.createElement( "div" ).appendChild( document.createTextNode( tooltips[ i ].content ) ) );
        }
    }

    // Display the tooltip
    current.style.display = "block";
}

/**
 * Hides the tooltip (display: hidden)
 */
function hideTooltip()
{
    current.style.display = "hidden";
}


// Move the selected tooltip with the mouse
window.onmousemove = function ( e )
{
    current.style.top = ( e.clientY + 5 ) + 'px';
    current.style.left = ( e.clientX + 5 ) + 'px';
};