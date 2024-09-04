import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoutes = ({ children }) => {
    const isUserLoggedin = localStorage.getItem('user');
    if (!isUserLoggedin) {
        return <Navigate to='login' />
    }
    return children
}

export default PrivateRoutes;