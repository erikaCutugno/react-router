import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function SinglePost() {
  const { id } = useParams();
  const [singlePosts, setSinglePosts] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3001/posts/${id}`).then((res) => {
      setSinglePosts(res.data);
    });
  }, [id]);

  return (
    <div className="container-sm">
      <h1>{singlePosts.title}</h1>
      <div>
        <img
          className="img-fluid"
          src={singlePosts.image}
          alt={singlePosts.title}
        />
      </div>

      {singlePosts.tags && (
        <ul className="tag">
          {singlePosts.tags.map((tag, index) => {
            return <li key={index}>{tag}</li>;
          })}
        </ul>
      )}
      <p>{singlePosts.content}</p>
      <div className="btn btn-single-page">
        {singlePosts.id != 1 ? (
          <button onClick={() => navigate(`/prodotti/${singlePosts.id - 1}`)}>
            Post precedente
          </button>
        ) : (
          <button disabled>Post precedente</button>
        )}
        {singlePosts.id != 5 ? (
          <button onClick={() => navigate(`/prodotti/${singlePosts.id + 1}`)}>
            Post successivo
          </button>
        ) : (
          <button disabled>Post successivo</button>
        )}
      </div>
    </div>
  );
}
