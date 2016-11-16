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

$(document).ready(function(){
    $("#verify-reset").click(function(e){
        e.preventDefault();
            var numeroRandom1 = Math.floor(Math.random() * 9);
            var numeroRandom2 = Math.floor(Math.random() * 9);
            var numeroRandom3 = Math.floor(Math.random() * 9);

            alert("LAB"+ numeroRandom1 + numeroRandom2 + numeroRandom3);
            window.location = "verify.html";
            form.submit();
    })
})

$(document).ready(function () {
    function init() {
        if (localStorage) {
            $('#inputCell').val(localStorage["inputCell"]);
            localStorage.clear();
        }
    }
    $('.inputCell').keyup(function () {
        localStorage[$(this).attr('id')] = $(this).val();
    });

    var traerNum = window.localStorage.getItem("inputCell");
    $("#celular-imp").text(traerNum); 

    init();

    // function randomInput() {
    $("#form-ver-cell").submit(function(e){ 
        e.preventDefault(); 

        var contenInput = $(".conten-code").val();
        var contenCode = $("#dig-1").val() + $("#dig-1").val() + $("#dig-1").val();
            if (contenCode == contenInput) {
                return true;
            }
            else {
            // alert("ingrese un codigo valido.");
            return false;
            }
        });
    // randomInput();
});