<?php
session_start();
require 'db_connection.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $userId = $_SESSION['user']['id'];
    $postId = $_POST['postId'];

    $stmt = $conn->prepare("INSERT INTO Likes (userId, postId) VALUES (?, ?)");
    $stmt->bind_param("ii", $userId, $postId);
    $stmt->execute();

    header('Location: index.php');
    exit();
}
?>
