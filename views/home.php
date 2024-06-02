<main>
    <form action="post.php" method="POST">
        <textarea name="content" placeholder="What's happening?"></textarea>
        <button type="submit">Post</button>
    </form>
    <?php
    $result = $conn->query("SELECT * FROM Posts ORDER BY createdAt DESC");
    while ($row = $result->fetch_assoc()) {
        echo "<div class='post'>";
        echo "<p>" . htmlspecialchars($row['content']) . "</p>";
        echo "<form action='like.php' method='POST'><input type='hidden' name='postId' value='" . $row['id'] . "'><button type='submit'>Like</button></form>";
        echo "<form action='comment.php' method='POST'><input type='hidden' name='postId' value='" . $row['id'] . "'><textarea name='content'></textarea><button type='submit'>Comment</button></form>";
        echo "</div>";
    }
    ?>
</main>
