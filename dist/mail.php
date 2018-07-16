<?php
$method = $_SERVER['REQUEST_METHOD'];

if ( $method === 'POST' ) {
	foreach ( $_POST as $key => $value ) {
		if ( $value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject" ) {
			$message .= "" . $key . ': ' .$value . ";  ";
		}
	}
}
$text = $message;
function adopt($text) {
	return '=?UTF-8?B?'.Base64_encode($text).'?=';
}

$token = '303613257:AAESVLxLGGYoAsIbCJMHN9Nu87mOGiHIeeU';
$chatId = 161119242;
$sms = $message;
$parameters = [
	'chat_id' => $chatId,
	'text' => $sms,
];

$url = 'https://api.telegram.org/bot' . $token . '/sendMessage?'
	. http_build_query($parameters);

file_get_contents($url);