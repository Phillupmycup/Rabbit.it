<?php

$to_email = "Phillip.Rodrigues@gmail.com";
$subject = "hellooooo";
$body = "halllllllllllllllllllllllllllllll";
$header = "from sender\'s email";


	if (mail($to_email, $subject, $body, $header)) {
      echo "email sent to $to_email";
   } else {
      echo "Email failed";

   }


?>