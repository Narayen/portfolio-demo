<?php

    $to_email = 'narayen23252232@gmail.com';
    $subject = 'Site contact Form';
    $message = "EMAIL: ".$_REQUEST['email-560']."\r\n";
    $message .= "NAME: ".$_REQUEST['text-558']."\r\n";
    $message .= "Phone: ".$_REQUEST['tel-561']."\r\n";
    $message .= "COMMENTS: ".$_REQUEST['com-562'];
    $headers = 'From: info@training.helpfulbalance.com';

    
    mail($to_email,$subject,$message,$headers);
        echo("<script type='text/javascript'>alert('Message Sent Successfully');</script>");

        echo("<script type='text/javascript'>window.location='index.php'</script>");

?>