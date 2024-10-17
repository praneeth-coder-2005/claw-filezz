import React, { useState } from 'react';

const CommentForm = ({ postId }) => {
  const [comment, setComment] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Submit the comment via API
    await fetch('/api/comments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ postId, comment }),
    });
    setComment('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea 
        value={comment} 
        onChange={(e) => setComment(e.target.value)} 
        placeholder="Leave a comment"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CommentForm;
