function submit_form()
{
	//alert('OK');
	
	var name = document.getElementById('user_name').value;
	var email = document.getElementById('user_email').value;
	var phone = document.getElementById('user_phone').value;
	var message = document.getElementById('user_msg').value;
	
	
	// alert(name);
	// alert(email);
	// alert(phone);
	// alert(message);
	
	$.post("/submit",
	{
		user_name: name,
		user_email: email,
		user_phone: phone,
		user_msg: message,
	},
	function(data)
	{
		alert('Form Submited');
	}
	)
}