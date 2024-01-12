import logo from './images/logo.png';
import React, { useEffect, useState } from 'react';
import './styles/Header.css';
import { FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleSearchButtonClick = () => {
    handleSearch();
  };

  const handleSearch = () => {
    navigate(`/search/${searchTerm}`);
    setSearchTerm('');
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    window.location.reload();
  };

  return (
    <header className="header">
      <div className="header-box">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>

        <div className="search">
          <input
            type="text"
            placeholder="Search a movie..."
            value={searchTerm}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
          />
          <button className="search-button" onClick={handleSearchButtonClick}>
            <FaSearch />
            <span>  Search</span>
          </button>
        </div>

        <div className="login">
          {isLoggedIn ? (
            <button onClick={handleLogout} className="logout-btn">
              Sign Out
            </button>
          ) : (
            <>
              <Link to="/signin" className="login-btn">
                Sign In
              </Link>
              <span className="slash"> / </span>
              <Link to="/signup" className="register-btn">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
