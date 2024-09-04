import React from 'react'
import { Navigate } from 'react-router-dom'

const PublicRoutes = ({ children }) => {
    const isUserLoggedin = localStorage.getItem('user');
    console.log(isUserLoggedin, 'isUserLoggedin');
    if (isUserLoggedin) {
        return <Navigate to='/' />
    }
    return children;
}

export default PublicRoutes