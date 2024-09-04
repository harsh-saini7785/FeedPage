// src/UserProfile.js
import React, { useEffect, useState, useContext } from 'react';
import Post from '../../components/Post/Post';
import profilePhoto from '../../assets/profile.jpeg'

import { styles } from './UserProfileStyles';
import { DataContext } from '../../context/DataContext';
import Loader from '../../components/Loader/Loader';

const user = {
    userId: 9050778575,
    name: 'Harsh Saini',
    avatar: 'https://via.placeholder.com/100',
    bio: 'Software Engineer at XYZ Inc.',
    location: 'San Francisco, CA',
    joined: 'January 2020',
};

const UserProfile = () => {
    const [posts, setPosts] = useState([]);
    const { posts: allPosts, setPosts: setAllPosts } = useContext(DataContext)

    useEffect(() => {
        const id = localStorage.getItem('user');
        const userPosts = allPosts?.filter((item) => item.userId === +id);
        setPosts(userPosts)
    }, [allPosts])

    return (
        <div style={styles.profile}>
            <div style={styles.profileHeader}>
                <img src={profilePhoto || user.avatar} alt="Avatar" style={styles.avatar} />
                <div style={styles.userInfo}>
                    <span style={styles.userName}>{user.name}</span>
                    <span style={styles.userDetails}>{user.bio}</span>
                    <span style={styles.userDetails}>{user.location}</span>
                    <span style={styles.userDetails}>Joined {user.joined}</span>
                </div>
            </div>
            <div style={styles.userPosts}>
                <div style={styles.userPostTextContainer}>
                    <h2>User Posts</h2>
                    <span>{posts?.length}</span>
                </div>
                {posts?.map((post) => (
                    <Post key={post.id} posts={allPosts} post={post} setPosts={setAllPosts} />
                ))}
            </div>
        </div>
    );
};

export default UserProfile;