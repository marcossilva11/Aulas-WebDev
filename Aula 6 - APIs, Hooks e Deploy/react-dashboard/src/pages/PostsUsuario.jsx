import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function PostsUsuario() {
  const parametros = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${parametros.id}`)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, [parametros]);
  return posts.map((post) => {
    <div>
      <p>{post.title}</p>
      <p>{post.title}</p>
    </div>;
  });
}
