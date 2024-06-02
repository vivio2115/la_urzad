<?php
$servername = "172.93.105.132";
$username = "root";
$password = "dIpG01c_*ssaB0ai0A+EckjzzMGf@b9A75C1E@#Az";
$dbname = "db_los_angos_dc";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
