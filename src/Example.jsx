import React, { useState, useEffect } from 'react';

function Example() {
  const [postData, setPostData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch post data from an API
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch post data');
        }
        return response.json();
      })
      .then((data) => {
        // Update state with the fetched post data
        setPostData(data);
      })
      .catch((error) => {
        // Handle errors
        setError(error.message);
      });
  }, []); // Empty dependency array means this effect runs only once, similar to componentDidMount

  return (
    <div>
      {error && <p>Error: {error}</p>}
      {postData ? (
        <div>
          <h1>Posts</h1>
          {postData.map((post) => (
            <div key={post.id}>
              <p>Post ID: {post.id}</p>
              <p>User ID: {post.userId}</p>
              <p>Post Title: {post.title}</p>
              <p>Post Body: {post.body}</p>
              <hr />
            </div>
          ))}
        </div>
      ) : (
        <p>Loading post data...</p>
      )}
    </div>
  );
}

export default Example;
