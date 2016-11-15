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
			required: "Introduce tu numero de celular.",
			inputCell:""
			}
		},
		submitHandler: function(form){
			var numeroRandom = Math.floor((Math.random() * 1000) + 1);
			alert("LAB"+ numeroRandom);
			// window.localStorage.setItem("ariable de lo que se va a almcacernar", y lo que se va a almcacdrnar)
			window.location = "verify.html";
        	form.submit();
        }
	})
});

$(document).ready(function() {
	$("#form-ver-cell").submit(function(e) {
		e.preventDefault();
	// window.location = 'index.html';
		
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
			alert("ingrese un codigo valido.");			
			window.location = "perfil.html";
        	form.submit();
        }
	});
});