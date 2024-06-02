<?php
session_start();
require 'db_connection.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $userId = $_SESSION['user']['id'];
    $content = $_POST['content'];

    $stmt = $conn->prepare("INSERT INTO Posts (userId, content, createdAt) VALUES (?, ?, NOW())");
    $stmt->bind_param("is", $userId, $content);
    $stmt->execute();

    header('Location: index.php');
    exit();
}
?>
