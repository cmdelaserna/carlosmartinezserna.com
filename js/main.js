
function imgLoaded(){
    $( "body" ).animate({
        opacity: "1",}, 
        1000, "linear");
     $( "#portfolio" ).animate({
        opacity: "1",}, 
        1500, "linear");
}

$( document ).ready(function() {
	imgLoaded();   
});