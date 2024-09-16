
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Create a context for authentication
const AuthContext = createContext();

// Provider component
export const AuthProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);
  const [adminId, setAdminId] = useState(null);
  const navigate = useNavigate(); // Ensure this is used only inside <Router>

  useEffect(() => {
    // Check session storage on component mount
    const storedUserId = sessionStorage.getItem('userId');
    const storedAdminId = sessionStorage.getItem('adminId');
    setUserId(storedUserId);
    setAdminId(storedAdminId);
  }, []);

  const loginUser = (userId) => {
    sessionStorage.setItem('userId', userId);
    setUserId(userId);
  };

  const loginAdmin = (adminId) => {
    sessionStorage.setItem('adminId', adminId);
    setAdminId(adminId);
  };

  const logout = () => {
    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('adminId');
    setUserId(null);
    setAdminId(null);
    navigate('/'); // Ensure navigate is used within <Router>
  };

  return (
    <AuthContext.Provider value={{ userId, adminId, loginUser, loginAdmin, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for using the Auth context
export const useAuth = () => useContext(AuthContext);
