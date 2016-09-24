<?php
require 'PHPMailer/PHPMailerAutoload.php';
$mail = new PHPMailer;

$mail->isSMTP();                            // Set mailer to use SMTP
$mail->SMTPDebug = 1; 
$mail->Host = 'smtp.mailgun.com';             // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                     // Enable SMTP authentication
$mail->Username = 'jaj@djambarish.com';          // SMTP username
$mail->Password = 'qwerty@123'; // SMTP password
$mail->SMTPSecure = 'tls';                  // Enable TLS encryption, `ssl` also accepted
$mail->Port = 587;                          // TCP port to connect to

$name=$_POST['name'];
$email=$_POST['email'];
$message=$_POST['message'];
$number=$_POST['number'];
$state=$_POST['state'];
$city=$_POST['city'];
$address=$_POST['address'];
$group=$_POST['group'];

$mail->setFrom('jaj@djambarish.com', 'New Enquiry');
//$mail->addReplyTo('info@codexworld.com', 'CodexWorld');
$mail->addAddress("arunshetty766@gmail.com");   // Add a recipient
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');

//$mail->isHTML(true);  // Set email format to HTML

//$bodyContent = '<h1>How to Send Email using PHP in Localhost by CodexWorld</h1>';
//$bodyContent .= '<p>This is the HTML email sent from localhost using PHP script by <b>CodexWorld</b></p>';

//$bodyContent=$message;


$bodyContent="";
if(isset($_POST['placeholder'])){
	$bodyContent = 'name:'.$name.'\n'.'email:'.$email.'\n'.'message:'.$message.'\n'.'number:'.$number.'\n'.'state:'.$state.'\n'.'city:'.$city.'\n'.'address:'.$address.'\n';
} else {
	$bodyContent = 'name:'.$name."\n".'email:'.$email."\n".'message:'.$message;
}


$mail->Subject ="New Enquiry";
$mail->Body    = $bodyContent;

if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Message has been sent';
}
?>