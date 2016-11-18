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
	$(".icono-profile").click(function(){
	    $(".profile-map").animate({right:"250px"});
		});
    $(".profile-map").click(function(){
	    $(this).animate({right:"250px"});
        // $(".user-datos").show();
    	// $(".contenedorVideo:first").fadeOut(700);
    });
})

$(document).ready(function(){
    $("#verify-reset").click(function(e){
        e.preventDefault();
            var numeroRandom1 = Math.floor(Math.random() * 9);
            var numeroRandom2 = Math.floor(Math.random() * 9);
            var numeroRandom3 = Math.floor(Math.random() * 9);

            alert("LAB"+ numeroRandom1 + numeroRandom2 + numeroRandom3);
            // window.location = "verify.html";
            form.submit();
    })
})