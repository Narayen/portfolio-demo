<?php

    // $to_email = 'narayen23252232@gmail.com';
    // $subject = 'Site contact Form';
    // $message = "EMAIL: ".$_REQUEST['email-560']."\r\n";
    // $message .= "NAME: ".$_REQUEST['text-558']."\r\n";
    // $message .= "Phone: ".$_REQUEST['tel-561']."\r\n";
    // $message .= "COMMENTS: ".$_REQUEST['com-562'];
    // // $headers = 'From: info@training.helpfulbalance.com';

    
    // mail($to_email,$subject,$message,$headers);
    //     echo("<script type='text/javascript'>alert('Message Sent Successfully');</script>");

    //     echo("<script type='text/javascript'>window.location='index.php'</script>");


    $name = $_POST['user_name'];
    $ema = $_POST['user_email'];
    $ph = $_POST['user_phone'];
    $msg = $_POST['user_msg'];

    $to_email = 'narayen23252232@gmail.com';
    $headers = "FROM: $ema \n";
    $headers .= "FROM: $ema \n";

    $subject = 'Site contact Form';
    $email_body = "You have received a new message from the user".$name."\r\n";
    $email_body .= "Here is the sender mail ID".$ema."\r\n";
    $email_body .= "Here is the sender phone number".$ph."\r\n";
    $email_body .= "Here is the message".$msg."\r\n";

    mail($to_email, $subject, $email_body, $headers);
        // echo("<script type='text/javascript'>alert('Message Sent Successfully');</script>");
?>