$( document ).ready(function() {
	$("#registro").submit(function(e) {
		e.preventDefault();
		}).validate({
			debug: false,

			rules: {
				"firstname": {
					required: true,
					lettersonly: true
				},
				"last-name": {
					required: true,
					lettersonly: true
				},
				"email": {
					required: true,
					email: true
				},
			},
			messages: {
				"firstname": {
					required: "Introduce tu nombre y apellido.",
					firstname:""
				},
				"last-name": {
			// required: remove(),
					last:""
				},
				"email": {
					required: "Introduce tu correo.",
					email: ""
				}
			},
		})
	});

$(document).ready(function() {
	$("#form-cell").submit(function(e) {
		e.preventDefault();
		}).validate({
			debug: false,

			rules: {
				"inputCell": {
					required: true,			
					number:true
				},
			},
			messages: {
				"inputCell": {
					inputCell:"",
					// required: "Introduce tu numero de celular."
				}
			},

		submitHandler: function(form){
			random();
			window.location = "verify.html";

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
        
        	form.submit();
        }
	})
});

$(document).ready(function() {
	$("#form-ver-cell").submit(function(e) {
		e.preventDefault();		
		}).validate({
			debug: false,

			rules: {
				"dig-1": {
					required: true,			
					number:true
				},

				"dig-2": {
					required: true,			
					number:true
				},

				"dig-3": {
					required: true,			
					number:true
				},
			},
			submitHandler: 
				function verificandoCod(){
					var contenInput = $(".conten-code").val();
					var contenCode = $("#dig-1").val() + $("#dig-2").val() + $("#dig-3").val();
						if ((contenCode == contenInput) && (contenInput != "")) {
						    return true;
						    window.location = "perfil.html"
						}
						else {
			    			alert("ingrese un codigo valido.");
			    			return false;
						}
				verificandoCod();
        	}
		}
	);
	$("#verify-reset").click(random);
});


function random(){
    var numeroRandom1 = Math.floor(Math.random() * 9);
    var numeroRandom2 = Math.floor(Math.random() * 9);
    var numeroRandom3 = Math.floor(Math.random() * 9);

    // localStorage.getItem(numeroRandom1+numeroRandom2+numeroRandom3);

    alert("LAB"+ numeroRandom1 + numeroRandom2 + numeroRandom3);
}
