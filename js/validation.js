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
			required: "Introduce tu numero de celular."
			}
		},

		submitHandler: function(form){
			var numeroRandom1 = Math.floor(Math.random() * 9);
			var numeroRandom2 = Math.floor(Math.random() * 9);
			var numeroRandom3 = Math.floor(Math.random() * 9);
			alert("LAB"+ numeroRandom1 + numeroRandom2 + numeroRandom3);
			window.location = "verify.html";
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
		submitHandler: function(form){
			window.location = "perfil.html";
        	form.submit();
        }
	});
});