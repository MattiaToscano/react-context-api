import React from 'react'
import { Link } from 'react-router-dom'

const PostsList = ({ posts }) => {
    if (!posts || posts.length === 0) {
        return <p>Nessun Post.</p>
    }

    return (
        <div className="posts-container">
            <h2>Posts</h2>
            <div className="posts-grid">
                {posts.map(post => (
                    <div key={post.id} className="post-card">
                        <h3>{post.title}</h3>
                        <p className="category">{post.category}</p>
                        <p className="content">{post.content}...</p>
                        <Link to={`/posts/${post.id}`}>Continua</Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PostsList