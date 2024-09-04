import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import profile from '../../assets/profile.jpeg'
import { DataContext } from '../../context/DataContext';

import { styles } from './CreatePostStyles';

const CreatePost = ({ setPostContent, postContent }) => {
  const [error, setError] = useState('');
  const { setPosts } = useContext(DataContext);
  const navigate = useNavigate()

  const handlePostContentChange = (e) => {
    setPostContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!postContent) {
      setError('Post content is required');
      return;
    }

    const newPost = {
      id: Date.now().toString(),
      author: 'John Doe',
      avatar: 'https://via.placeholder.com/50',
      date: new Date(),
      content: postContent,
      image: 'https://via.placeholder.com/300',
      userId: +localStorage.getItem('user'),
      likes: [],
      comments: [],
    }
    // Clear the form
    setPostContent('')
    setPosts(prev => [...prev, newPost])
    setError('');
  };

  return (
    <div style={styles.createPost}>
      <form style={styles.form} onSubmit={handleSubmit}>
        <div style={styles.formGroup}>
          <img
            onClick={() => navigate('/user-profile')}
            src={profile}
            alt="Profile Avatar"
            style={styles.avatar}
          />
          <textarea
            placeholder="What do you want to talk about?"
            value={postContent}
            onChange={handlePostContentChange}
            style={styles.textarea}
          />
        </div>
        {error && !postContent.trim()?.length && <p style={styles.error}>{error}</p>}
        <button type="submit" style={styles.button}>Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
