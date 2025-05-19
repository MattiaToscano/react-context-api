import React from 'react'
import { Link } from 'react-router-dom'

const PostCard = ({ post }) => (
    <div className="post-card">
        <h3>{post.title}</h3>
        <p className="category">{post.category}</p>
        <p>{post.content}</p>
        <Link to={`/posts/${post.id}`}>Leggi ancora</Link>
    </div>
);

export default PostCard;
