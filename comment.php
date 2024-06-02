<?php
session_start();
require 'db_connection.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $userId = $_SESSION['user']['id'];
    $postId = $_POST['postId'];
    $content = $_POST['content'];

    $stmt = $conn->prepare("INSERT INTO Comments (userId, postId, content, createdAt) VALUES (?, ?, ?, NOW())");
    $stmt->bind_param("iis", $userId, $postId, $content);
    $stmt->execute();

    header('Location: index.php');
    exit();
}
?>
