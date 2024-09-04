import React, { useContext } from 'react';
import Post from '../../components/Post/Post';
import { DataContext } from '../../context/DataContext';

import { styles } from './FeedStyles';

const Feed = () => {
    const { posts, setPosts } = useContext(DataContext);
    return (
        <div style={styles.feed}>
            {posts.map((post) => (
                <Post key={post.id} post={post} posts={posts} setPosts={setPosts} />
            ))}
        </div>
    );
};

export default Feed;