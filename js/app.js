$(document).ready(function(){
    $(".logoIntro").click(function(){
        $(".intro").fadeOut(1000);
    });
})

$(document).ready(function(){
    $(".botonSign").click(function(){
        $(this).parent().parent().fadeOut(700);
    	// $(".contenedorVideo:first").fadeOut(700);
    });
})

$(document).ready(function(){
	$(".user-datos").click(function(){
	    $(".profile-map").show(0);
		});
    $(".profile-map").click(function(){
	    $(this).hide(0);
        // $(".user-datos").show();
    	// $(".contenedorVideo:first").fadeOut(700);
    });
})