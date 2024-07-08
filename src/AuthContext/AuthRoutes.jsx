import React, { useContext, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { AuthContext } from './FormContext'; // Import the AuthContext correctly

const AuthRoutes = () => {
  const { token } = useContext(AuthContext); // Use useContext hook to access context state
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/form'); // Navigate to '/form' if token is not set
    }
  }, [token, navigate]);

  return (
    <div>
      <Outlet />
    </div>
  );
}

export default AuthRoutes;
