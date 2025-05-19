import React from 'react'
import posts from '../../data/posts'
import PostsList from '../../components/PostsList'

const Posts = () => {
    return <PostsList posts={posts} />
}

export default Posts