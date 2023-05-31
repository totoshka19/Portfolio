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
echo "<br>";

$filename = "/var/www/html/messages.txt";
$content = $name . "/n" . $email . "/n" . $msg . "/n". "------------------------------------------------" . "/n";

file_put_contents($filename, $content);