import React from 'react'
import { Link } from 'react-router-dom'
import PostCard from './PostCard'

const PostsList = ({ posts }) => {

    return (
        <div className="posts-container">
            <div className="posts-grid">
                {posts.map(post => (
                    <PostCard key={post.id} post={post} />
                ))}
            </div>
        </div>
    )
}

export default PostsList