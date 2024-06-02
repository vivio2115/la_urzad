<?php
session_start();
require 'db_connection.php';

$clientId = '1241802317146357871';
$clientSecret = 'BouDUGy5aodr8o3Q_8cV2E0vVZN0_gHk';
$redirectUri = 'http://your-heroku-app.herokuapp.com/callback.php';

if (isset($_GET['code'])) {
    $code = $_GET['code'];
    // Kod wymiany na token dostępu i zapisanie użytkownika w bazie danych
}
?>
