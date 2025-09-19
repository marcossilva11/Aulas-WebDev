import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function PostsUsuario() {
  const parametros = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userID=${parametros.id}`)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    posts.map(post => {
        <div>
            <div>{post.title}</div>
            <p>{post.title}</p>
        </div>
    })
  )
}
