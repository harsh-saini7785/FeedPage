import React, { useState, useContext, useEffect } from 'react';
import likeIcon from '../../assets/like.png';
import likedIcon from '../../assets/liked.png';
import commentIcon from '../../assets/comments.png'
import { formatTimeDifference } from '../../utils';

import { styles } from './PostStyles';

const Post = ({ post, posts, setPosts }) => {
    const [isLiked, setIsLiked] = useState(false);
    const [isCommentsShow, setIsCommentsShow] = useState(false);
    const [commentText, setCommentText] = useState('');
    const userId = +localStorage.getItem('user')

    useEffect(() => {
        setIsLiked(post.likes.includes(userId))
    }, [])

    const removeLike = (likes) => {
        return likes?.filter((item) => item !== userId)
    }

    const handleLike = () => {
        setIsLiked((prev) => !prev);
        const id = post.id;
        const updatedPosts = posts?.map((item) => {
            if (item.id === id) {
                return {
                    ...item, ...isLiked ? { likes: removeLike(item.likes) } : { likes: [...item.likes, userId] }
                }
            } else {
                return item;
            }
        })

        setPosts(updatedPosts)
    };

    const handleCommentChange = (e) => {
        setCommentText(e.target.value);
    };

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (commentText) {
            const id = post.id;
            const updatedPosts = posts?.map((item) => {
                if (item.id === id) {
                    return { ...item, comments: [...item.comments, commentText] }
                } else {
                    return item;
                }
            })
            setPosts(updatedPosts);
            setIsCommentsShow(true);
            setCommentText('')
        }
    };

    return (
        <div style={styles.post}>
            <div style={styles.postHeader}>
                <img src={post.avatar} alt="Avatar" style={styles.avatar} />
                <div>
                    <h4>{post.author}</h4>
                    <p>{formatTimeDifference(post.date)}</p>
                </div>
            </div>
            <div style={styles.postContent}>
                <p>{post.content}</p>
            </div>
            <div style={styles.postActions}>
                <span onClick={handleLike} style={styles.likeButton}>
                    {!isLiked
                        ? <>< img style={styles.likeIcon} src={likeIcon} alt='likeicon' width={30} height={30} /> <span>{post?.likes?.length}</span></>
                        : <>< img style={styles.likeIcon} src={likedIcon} alt='likeicon' width={30} height={30} /> <span>{post?.likes?.length}</span></>
                    }
                </span>
                <span style={styles.likeButton}>
                    <img onClick={() => setIsCommentsShow(prev => !prev)} src={commentIcon} alt='comment' width={30} height={30} /> <span>{post?.comments?.length}</span>
                </span>
            </div>
            <div style={styles.commentSection}>
                <form onSubmit={handleCommentSubmit}>
                    <div style={styles.commentContainer}>
                        <input
                            type="text"
                            placeholder="Add a comment..."
                            value={commentText}
                            onChange={handleCommentChange}
                            style={styles.commentInput}
                        />
                        {!!commentText?.length && <p onClick={handleCommentSubmit} style={styles.commentButton}>comment</p>}
                    </div>
                </form>
                {isCommentsShow && <div style={styles.writeCommentSection}>
                    {post?.comments.map((comment, index) => (
                        <div key={index} style={styles.comment}>
                            <div style={styles.postHeader}>
                                <img src={post.avatar} alt="Avatar" style={styles.commentAvatar} />
                                <div>
                                    <h4>{post.author}</h4>
                                </div>
                            </div>
                            <div style={styles.commenttext} >
                                <p>{comment}</p>
                            </div>
                        </div>
                    ))}
                </div>}
            </div>
        </div>
    );
};

export default Post;