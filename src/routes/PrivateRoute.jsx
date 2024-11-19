// PrivateRoute.jsx
import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <span className="loading loading-spinner loading-lg"></span>; // Show loading spinner while fetching auth status
  }

  if (user) {
    return children;  // Allow access to the route if user is logged in
  }

  return <Navigate to="/login" />;  // Redirect to login if user is not logged in
};

export default PrivateRoute;
