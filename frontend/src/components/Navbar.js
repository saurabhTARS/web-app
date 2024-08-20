// src/components/Navbar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ isAuthenticated, handleLogout }) => {
  const navigate = useNavigate();

  const logout = () => {
    handleLogout();
    navigate('/');
  };

  return (
    <nav>
      <Link to="/">Home</Link>
      {!isAuthenticated ? (
        <>
          <Link to="/login">Login</Link>
        </>
      ) : (
        <>
          <Link to="/products">Products</Link>
          <button onClick={logout}>Logout</button>
        </>
      )}
    </nav>
  );
};

export default Navbar;
