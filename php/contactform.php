<?php 

if(!isset($_POST["submit"])) 

$name = $_POST['name'];
$email = $_POST['email'];
$number = $_POST['number'];
$message = $_POST['message'];
$howyouhear = $_POST['howyouhear'];
$updateme = $_POST['updateme'];

$to = "phill.rodrigues@rocketmail.com";
$subject = "New form submision";
$email_body = 'Name: ' . $name . "\r\n";
$email_body .= 'Email: ' . $email . "\r\n";
$email_body .= 'Name: ' . $message;

mail($to, $subject, $email_body);

?>