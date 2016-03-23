/* load in jquery */
script < src: "https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"

$(document).ready(function() 
{
    $("#ae").click(function()
    {
        $("div.ae").show();
        $("div.fj").hide();
        $("div.ko").hide();
        $("div.pt").hide();
        $("div.uz").hide();
    } );
} );