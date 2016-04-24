/**
 * Draw a circle on the specified canvas
 * @param #canvID
 *		The id of the canvas to draw on
 * @param #fill
 *		True: The circle will be filled
 *		False: The circle will be just an outline
 * @param #circle
 *		True: Draw a circle
 *		False: Draw a rectangle
 * @param #radius
 *		If @param #circle: The radius of the circle to draw
 *		Else: The width of the rectangle
 * @param #height
 *		The height of the rectangle, if that is
 *		what's being drawn
 */
function draw( canvID, fill, circle, radius, height )
{
 	// Find the canvas
 	var canvas = document.getElementById( canvID );
	var context = canvas.getContext( "2d" );

	// Draw the shape directly in the center of the specified canvas
	context.beginPath();
	if ( circle )
	{
		context.arc( canvas.width / 2, canvas.height / 2, radius, 0, 2 * Math.PI );
		if ( fill )
		{
			context.fillStyle = "darkred";
			context.fill();
		}
		else context.stroke();
	} else if ( fill )
		context.fillRect( 0, 0, canvas.width, canvas.height );
	else context.strokeRect( 0, 0, canvas.width, canvas.height );
}

/**
 * Clears a previously drawn on canvas
 * @param #canvID
 *		The id of the canvas to clear
 */
function clearCanvas( canvID )
{
	// Find the canvas
 	var canvas = document.getElementById( canvID );

 	// Clear it
 	canvas.clearRect( 0, 0, canvas.width, canvas.height );
}