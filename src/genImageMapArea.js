/**
 * Generates all an image maps mouseover "area" elements
 * @param #image
 *		True: This is for the legislation map
 *		False: This is for the timeline
 * @param #coords
 *		An array of the coordinates of the top left
 *		corner of each image area to be generated
 */
function genImageMapArea( image, coords )
{
	// An array of all the US state names
	var states = [ "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming" ];

 	// Add all of the areas with the specified coordinates
 	for ( var i = 0; i < coords.length; i += 2 )
 	{
 		// Create the new clickable area
 		var newArea = document.createElement( 'area' );

 		// For the legislation map
 		if ( image )
 		{
 			// Modify the area to contain the alternative text, shape, and the correct state linkage
 			var toCall = "tooltipInfo( \"" + states[ i / 2 ] + "\" )";

 			newArea.setAttribute( "onmouseover", toCall );
 			newArea.setAttribute( "shape", "rect" );
 			newArea.setAttribute( "alt", states[ i / 2 ] );

 			// Add the correct coordinates to the new image map area
 			var coordinates = "" + coords[ i ] + ", " + coords[ i + 1 ] + ", 60, 60";
 			newArea.setAttribute( "coords", coordinates );

 			// Add the correct id to the map area
        	newArea.setAttribute( "id", states[ i / 2 ] );

        	// Add the image area to the correct image map
        	document.getElementById( "legislationMap" ).appendChild( newArea );
 		} else // For the timeline
 		{
 			// Modify the area to contain the shape and the correct date linkage
 			var toCall = "displayTooltip( \"" + ( i / 2 ) + "\" )";

 			newArea.setAttribute( "onmouseover", toCall );
 			newArea.setAttribute( "onmouseout", "hideTooltip()" );
 			newArea.setAttribute( "shape", "rect" );

 			// Add the correct coordinates to the new image map area
 			var coordinates = "" + coords[ i ] + ", " + coords[ i + 1 ] + ", 60, 60";
 			newArea.setAttribute( "coords", coordinates );

        	// Add the image area to the correct image map
        	document.getElementById( "timelineMap" ).appendChild( newArea );
 		}
 	}
}