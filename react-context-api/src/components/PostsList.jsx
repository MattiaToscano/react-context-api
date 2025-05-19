import React from 'react'

const PostsList = () => {
    return (
        <div className="posts-page">
            <h1>Posts</h1>
            {posts && posts.map(post => (
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.content}</p>
                    <NavLink to={`/post/${post.id}`}>Read More</NavLink>
                </div>
            ))}
        </div>
    )
}

export default PostsList