import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MainSite = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/posts'); // Replace with your backend API
        setPosts(response.data);
        setLoading(false);
      } catch (err) {
        setError('Error fetching posts');
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Latest Posts</h1>
      {posts.map((post, index) => (
        <div key={index} className="post">
          <h2>{post.title}</h2>
          <p>{post.description}</p>
          <div>
            <a href={`/post/${post.slug}`}>Read more</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainSite;
