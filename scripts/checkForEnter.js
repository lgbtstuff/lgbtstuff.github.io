/**
 * Executes {@param #fun} if the user presses enter
 * while selecting the element with id {@param #id}
 * Will correctly pass function arguments only if there
 * are between 0 and 5 of them, inclusive
 */
function checkForEnter( fun, id )
{
	document.getElementById( id ).addEventListener( "keypress", function ( event ) {
    	// Determine the key that was pressed
        var key = event.which || event.keyCode;

        // 13 is Enter
        if (key === 13)
        {
        	// Convert the function call portion of string "fun" into a function pointer
        	var func = window[ fun.substring( 0, fun.indexOf( "(" ) ) ];
        	
        	// Continue only if this is a valid function
        	if ( typeof func === "function" )
        	{
        		// An array of function arguments
        		var args = [];

        		// Continue until all function arguments have been recorded
        		while ( fun.indexOf( "\"" ) != -1 )
        		{
        			// Remove up to the first quotation mark (inclusive)
        			fun = fun.substring( fun.indexOf( "\"" ) + 1 );

        			// Add the argument to args
        			args.push( fun.substring( 0, fun.indexOf( "\"" ) ) );

	        		// Remove that argument from fun
	        		fun = fun.substring( fun.indexOf( "\"" ) + 1 );
	        	}

        		// Run the function with the specified number of arguments
        		switch ( args.length )
        		{
        			case 1: func( args[ 0 ] );
        				break;
        			case 2: func( args[ 0 ], args[ 1 ] );
       		 			break;
       		 		case 3: func( args[ 0 ], args[ 1 ], args[ 2 ] );
        				break;
        			case 4: func( args[ 0 ], args[ 1 ], args[ 2 ], args[ 3 ] );
        				break;
        			case 5: func( args[ 0 ], args[ 1 ], args[ 2 ], args[ 3 ], args[ 4 ] );
        				break;
        			default: func();
        		}
        	}	
        }
    } );
}