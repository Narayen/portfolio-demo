function submit_form() {

	var name = document.getElementById('user_name').value;
	var email = document.getElementById('user_email').value;
	var phone = document.getElementById('user_phone').value;
	var message = document.getElementById('user_msg').value;

    // Validate if the text field is empty or data is proper
    if($('#user_name').val().length>0) {
        
		//here it'll take the value without whitespaces only at the beginning and the end.
		if($('#user_name').val().trim()=='') {
            alert('Please enter your name');
            $('#user_name').val('');
            $('#user_name').focus();
            return;
        }
    } else {
        alert('Please enter your name');
        $('#user_name').val('');
        $('#user_name').focus();
        return;
    }

    // Validate if the text field is empty or data is proper
    if($('#user_phone').val().length>0) {
        
		//here it'll take the value without whitespaces only at the beginning and the end.
		if($('#user_phone').val().trim()=='') {
            alert('Please enter the phone number');
            $('#user_phone').val('');
            $('#user_phone').focus();
            return;
        }
    } else {
        alert('Please enter the phone number');
        $('#user_phone').val('');
        $('#user_phone').focus();
        return;
	}
	
	if($('#user_email').val().length>0) {
        
		//here it'll take the value without whitespaces only at the beginning and the end.
		if($('#user_email').val().trim()=='') {
            alert('Please enter the Email');
            $('#user_email').val('');
            $('#user_email').focus();
            return;
        }
    } else {
        alert('Please enter the Email');
        $('#user_email').val('');
        $('#user_email').focus();
        return;
    }

    // Validate if the text field is empty or data is proper
    if($('#user_msg').val().length>0) {
        
		//here it'll take the value without whitespaces only at the beginning and the end.
		if($('#user_msg').val().trim()=='') {
            alert('Please enter your message');
            $('#user_msg').val('');
            $('#user_msg').focus();
            return;
        }
    } else {
        alert('Please enter your message');
        $('#user_msg').val('');
        $('#user_msg').focus();
        return;
	}
	
	alert('OK');
	alert(name);
	alert(email);
	alert(phone);
	alert(message);
	
	// $.post("/submit", {
	// 	user_name: name,
	// 	user_email: email,
	// 	user_phone: phone,
	// 	user_msg: message,
	// },
	// function(data) {
	// 	alert('Form Submited');
	// })
}