<?php
$clientId = '1241802317146357871';
$redirectUri = 'http://your-heroku-app.herokuapp.com/callback.php';
$discordAuthUrl = "https://discord.com/api/oauth2/authorize?client_id=$clientId&redirect_uri=" . urlencode($redirectUri) . "&response_type=code&scope=identify";

header('Location: ' . $discordAuthUrl);
exit();
?>
