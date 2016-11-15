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
			// minLength:9,
			// maxLength:9,
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

			if(localStorage){
				var celular = document.getElementById("inputCell");
				localStorage.setItem("inputCell", celular);
			}
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
			// messages: {
			// "inputCell": {
			// required: "Introduce tu numero de celular.",
			// inputCell:""
			// }
		// },
		submitHandler: function(form){
			alert("ingrese un codigo valido.");			
			// window.location = "verify.html";
        	form.submit();
        }
	});
});