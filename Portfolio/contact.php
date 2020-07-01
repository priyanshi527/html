<?php
    $first_name =$_POST['first-name'];
    $last_name =$_POST['last-name'];
    $visitor_email = $_POST['email'];
    $message=$_POST['message'];

    $email_from ='priyanshi9b@gmail.com';
    $email_subject = "Portfolio feedback";
    $email_body = "User Name: $first_name.+ " " + $last_name.\n".
                        "User Email: $visitor_email.\n".
                             "User Message: $message.\n";

    $to = "priyanshi9b@gmail.com";
    $headers = "From: $email_from \r\n";
    $headers .="Reply-To: $visitor_email \r\n";
    mail($to,$email_subject,$email_body,$headers);
    header("Location: https://github.com/priyanshi527/html/blob/master/Portfolio/portfolio.html");
?>                            
