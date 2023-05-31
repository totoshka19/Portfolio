<?php

$name = $_POST['name'];
$email = $_POST['email'];
$msg = $_POST['msg'];

//функция преобразует все символы, которые пользователь попытается добавить в форму
$name = htmlspecialchars($name);
$email = htmlspecialchars($email);
$msg = htmlspecialchars($msg);

//декодирует url, если пользователь попытается его добавить в форму
$name = urldecode($name);
$email = urldecode($email);
$msg = urldecode($msg);

//функция удаляет пробелы с начала и конца строки, если таковые имеются:
$name = trim($name);
$email = trim($email);
$msg = trim($msg);

echo $name;
echo "<br>";
echo $email;
echo "<br>";
echo $msg;


if (mail("totoshechka19@gmail.com", "Письмо с моего сайта", "Сообщение:".$msg,"From: $email \r\n"))
{
    echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}