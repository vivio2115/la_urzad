import React, { useState, useEffect } from "react";
import axios from "axios";

axios.defaults.baseURL = "https://twitter.losangos.pl/api";

function App() {
  const [posts, setPosts] = useState([]);
  const [content, setContent] = useState("");

  useEffect(() => {
    axios.get("/posts").then((response) => {
      setPosts(response.data);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/posts", { content }).then((response) => {
      setPosts([response.data, ...posts]);
      setContent("");
    });
  };

  const handleLike = (id) => {
    axios.post(`/posts/${id}/like`).then((response) => {
      setPosts(
        posts.map((post) =>
          post.id === id
            ? { ...post, Likes: [...post.Likes, response.data] }
            : post
        )
      );
    });
  };

  const handleComment = (id, comment) => {
    axios
      .post(`/posts/${id}/comment`, { content: comment })
      .then((response) => {
        setPosts(
          posts.map((post) =>
            post.id === id
              ? { ...post, Comments: [...post.Comments, response.data] }
              : post
          )
        );
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button type="submit">Post</button>
      </form>
      <div>
        {posts.map((post) => (
          <div key={post.id}>
            <p>{post.content}</p>
            <button onClick={() => handleLike(post.id)}>
              Like ({post.Likes.length})
            </button>
            <div>
              {post.Comments.map((comment) => (
                <p key={comment.id}>{comment.content}</p>
              ))}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleComment(post.id, e.target.comment.value);
                  e.target.comment.value = "";
                }}
              >
                <input type="text" name="comment" />
                <button type="submit">Comment</button>
              </form>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
