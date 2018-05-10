$(document).ready(function() {
	
	$("#contact_form").validate({
		rules: {
			first_name: {
				required: true
			},
			last_name: {
				required: true
			},
			mob:{
				required:true,
				phoneUS: true
			},
			email: {
				required: true,
				email: true
			},
			message:{
				required:true,
				minlength:20
			}
		},
 		messages: {
			mob: {
				mob: "*Phone number must be in valid formats"
			}
		} 
	}); // end validate
}); // end ready