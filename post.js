import React from 'react';
import { FacebookShareButton, TwitterShareButton } from 'react-share';

const Post = ({ post }) => (
  <div>
    <h1>{post.title}</h1>
    <p>{post.content}</p>

    <div className="share-buttons">
      <FacebookShareButton url={window.location.href} quote={post.title}>
        Share on Facebook
      </FacebookShareButton>
      <TwitterShareButton url={window.location.href} title={post.title}>
        Share on Twitter
      </TwitterShareButton>
    </div>
  </div>
);

export default Post;
