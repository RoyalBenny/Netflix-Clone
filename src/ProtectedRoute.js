import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
    const auth = localStorage.getItem("isLoggedIn"); 
    return auth ==='true' ? <Outlet /> : <Navigate to="/Hero" />;
}

export default ProtectedRoute;