import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const ProtectedRoute = ({ element: Element, adminOnly = false, ...rest }) => {
  const { userId, adminId } = useAuth();

  // Determine if the user or admin is authenticated
  const isAuthenticated = adminOnly ? adminId : userId;

  // Redirect based on authentication status
  return isAuthenticated ? (
    <Element {...rest} />
  ) : (
    <Navigate to={adminOnly ? '/adminlogin' : '/userlogin'} />
  );
};

export default ProtectedRoute;
