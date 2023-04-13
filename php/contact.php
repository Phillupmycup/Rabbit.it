<?php

  require 'vendor/autoload.php';

  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\Exception;

  use Google\Cloud\RecaptchaEnterprise\V1\Assessment;
  use Google\Cloud\RecaptchaEnterprise\V1\Event;
  use Google\Cloud\RecaptchaEnterprise\V1\Key;
  use Google\Cloud\RecaptchaEnterprise\V1\RecaptchaEnterpriseServiceClient;
  use Google\Cloud\RecaptchaEnterprise\V1\WebKeySettings;
  use Google\Cloud\RecaptchaEnterprise\V1\WebKeySettings\IntegrationType;

  $ignore = array(
  );

  if( $_POST ) {

    $name = trim( stripslashes( $_POST['name'] ));
    $email = strtolower( trim( stripslashes( $_POST['email'] )));
    $message = trim( stripslashes( $_POST['message'] ));
    $telephone = trim( stripslashes( $_POST['telephone'] ));
    $howyouhear = trim( stripslashes( $_POST['howyouhear'] ));
    if( array_key_exists( 'updateme', $_POST )) {
      $updateme = trim( stripslashes( $_POST['updateme'] ));
    } else {
      $updateme = '';
    }

    $recaptcha = new RecaptchaEnterpriseServiceClient();
    $project = $recaptcha->projectName( 'rabbit-it-websit-1678709740054' );
    $event = ( new Event() )->setSiteKey( '6LctnvckAAAAAJySpQDL6lgQwPZJR8YJiiG8kshv' )->setToken( $_POST['g-recaptcha-response'] );
    $assessment = ( new Assessment() )->setEvent( $event );
    $verified = false;
    try {
      $response = $recaptcha->createAssessment( $project, $assessment );
      if( $response->getTokenProperties()->getValid() == true && $response->getRiskAnalysis()->getScore() > 0.5 ) {
        $verified = true;
      }
    } catch( exception $e ) {}

    if( $verified ) {
      if( !in_array( $email, $ignore, true )) {
        try {
          $mail = new PHPMailer( false );
          $mail->CharSet = 'UTF-8';
          $mail->ContentType = 'text/plain';
          $mail->IsHTML( false );
          $mail->setFrom('noreply@rabbit-it.ch', 'rabbit it website');
          $mail->addAddress('contact@rabbit-it.ch');
          $mail->Subject = 'Kontaktformular';
          $mail->Body = "Name: ".$name."\nEmail: ".$email."\nTelephone: ".$telephone."\nHowyouhear: ".$howyouhear."\nUpdateme: ".(empty($updateme)?"No":$updateme)."\n\nMessage: ".$message;
          $mail->send();
          print "OK";
          exit;
        } catch( Exception $e ) {}
      }
    }

  }

  print "ERROR";

?>