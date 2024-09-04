import React, { useState } from 'react'
import CreatePost from '../../components/CreatePost/CreatePost'
import Feed from '../Feed/Feed'

const Home = () => {
    const [postContent, setPostContent] = useState('');
    return (
        <div>
            <CreatePost {...{ postContent, setPostContent }} />
            <Feed />
        </div>
    )
}

export default Home