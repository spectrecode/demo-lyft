$( document ).ready(function() {
	$("#registro", "#form-cell").submit(function(e) {
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

			"input-cell": {
			required: true,
			lettersonly: true
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

			"input-cell": {
			required: "Introduce tu numero de celular",
			input-cell:""
			},
		},
		highlight: function(element, errorClass) {
        	$(element).removeClass(errorClass);
    	}
	});
// 	$("#form-cell").submit(function(e) {
// 		e.preventDefault();
// 		}).validate({
// 			debug: false,

// 			rules: {
// 			"input-cell": {
// 			required: true,
// 			lettersonly: true
// 			},
// 		},
// 			messages: {
// 			"input-cell": {
// 			required: "Introduce tu numero de celular",
// 			input:""
// 			},
// 		},
// 		// highlight: function(element, errorClass) {
//   //       	$(element).removeClass(errorClass);
//   //   	}
// 	});
// });

// $(document).ready(function() {
// 	$("#form-cell").submit(function(e) {
// 		e.preventDefault();
// 		}).validate({
// 			debug: false,

// 			rules: {
// 			"input-cell": {
// 			required: true,
// 			lettersonly: true
// 			},
// 		},
// 			messages: {
// 			"input-cell": {
// 			required: "Introduce tu numero de celular",
// 			input:""
// 			},
// 		},
// 		// highlight: function(element, errorClass) {
//   //       	$(element).removeClass(errorClass);
//   //   	}
// 	});
// })