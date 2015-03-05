<?
	$APPLICATION->IncludeComponent(
			"custom:main.feedback",
			"feedback",
			Array(
				"USE_CAPTCHA" => "Y",
				"OK_TEXT" => "Спасибо, ваше сообщение отправлено.",
				"EMAIL_TO" => "vityok555@gmail.com",
				"REQUIRED_FIELDS" => array(),
				"EVENT_MESSAGE_ID" => array("7")
			)
		);
		?>