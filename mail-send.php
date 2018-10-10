<?php

if (isset($_POST['name']) && isset($_POST['email'])) {

	$name = $_POST['name'];
	$email = $_POST['email'];
	$phone = $_POST['phone'];

	$to = 'sales@leadpoint.com.ua';
	$subject = isset($_POST['subject']) ? $_POST['subject'] : 'Форма заявки с лендинга RealEstate';

	$message = "
    <html>
        <head>
        <title>{$subject}</title>
        <style>body{font: normal 1rem/1.5 sans-serif;}</style>
        </head>
        <body>
        <h2>Заявка от {$name}</h2>
        <p>Email: {$email}</p>
        <p>Телефон: {$phone}</p>
        </body>
        </html>
    ";
	$headers = 'From: info@acrnm.pro' . "\r\n" .
			   'Reply-To: ' . $email . "\r\n" .
			   'X-Mailer: PHP/' . phpversion();
	$headers = 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";

	mail($to, $subject, $message, $headers);

	header('Location: /thanks.html');
}
