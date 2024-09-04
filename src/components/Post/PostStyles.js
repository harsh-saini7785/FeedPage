export const styles = {
    post: {
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '20px',
        marginBottom: '20px',
    },
    postHeader: {
        display: 'flex',
        alignItems: 'center',
    },
    avatar: {
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        marginRight: '10px',
    },
    commentAvatar: {
        width: '35px',
        height: '35px',
        borderRadius: '50%',
        marginRight: '10px',
    },
    commenttext: {
        marginLeft: '45px'
    },
    postContent: {
        marginTop: '10px',
        marginBottom: '10px',
        fontSize: '16px'
    },
    postActions: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    likeButton: {
        // color: '#0073b1',
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        gap: '10px'
    },
    likeIcon: {
        cursor: 'pointer'
    },
    commentSection: {
        marginTop: '10px',
    },
    commentContainer: {
        border: '1px solid #ddd',
        borderRadius: '4px',
        padding: '0px 10px',
        display: 'flex',
        alignItems: 'center'
    },
    commentInput: {
        width: '95%',
        borderRadius: '4px',
        border: 'none',
        marginTop: '10px',
        outline: 'none',
        marginBottom: '10px',
    },
    commentButton: {
        color: 'skyBlue',
        fontSize: '15px',
        cursor: 'pointer',
        fontWeight: 'bold'
    },
    comment: {
        marginTop: '20px',
        fontSize: '15px',
    },
    writeCommentSection: {
        maxHeight: '300px',
        overflow: 'auto'
    }
};