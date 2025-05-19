import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import posts from '../../data/posts'

const Posts = () => {


    return (
        <div className="posts-page">
            <h1 className="page-title">Posts</h1>
            <p>Debug: {posts ? `Found ${posts.length} posts` : 'No posts found'}</p>

            <div className="posts-container">
                {!posts || posts.length === 0 ? (
                    <div className="loading-container">Nessun Post</div>
                ) : (
                    posts.map((post) => (
                        <div className="post-card" key={post.id}>
                            <div className="post-details">
                                <h3 className="post-title">{post.title}</h3>
                                <p className="post-body">{post.content}</p>
                                <NavLink to={`/post/${post.id}`} className="btn btn-primary">
                                    Read More
                                </NavLink>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}

export default Posts