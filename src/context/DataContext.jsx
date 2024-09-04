import React, { createContext, useState, useEffect } from 'react';
import { initialPosts } from '../dummyPost';

const DataContext = createContext();

const DataProvider = ({ children }) => {
    const [posts, setPosts] = useState(JSON.parse(localStorage.getItem('posts')) || initialPosts);

    useEffect(() => {
        localStorage.setItem('posts', JSON.stringify(posts))
    }, [posts])

    return (
        <DataContext.Provider value={{ posts, setPosts }}>
            {children}
        </DataContext.Provider>
    );
}

export { DataContext, DataProvider };