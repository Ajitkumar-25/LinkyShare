import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if token exists in localStorage
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    // Remove token from localStorage and update state
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <header className="text-gray-400 bg-gray-800 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav className="flex lg:w-2/5 flex-wrap items-center text-xl md:ml-auto">
          <Link to="/" className="mr-5 hover:text-white">
            Home
          </Link>
          <Link to="/upload" className="mr-5 hover:text-white">
            Upload
          </Link>
          <Link to="/features" className="mr-5 hover:text-white">
            Features
          </Link>
          <Link to="/contact" className="hover:text-white">
            Contact
          </Link>
        </nav>
        <Link
          className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-white lg:items-center lg:justify-center mb-4 md:mb-0"
          to="/"
        >
          <img
            src="logo.svg"
            alt=""
            style={{ width: "70px", height: "50px" }}
          />
          <span className="ml-3 text-xl xl:block lg:hidden">LinkyShare</span>
        </Link>
        <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="inline-flex items-center text-white bg-red-500 border-0 py-1 px-6 focus:outline-none hover:bg-red-600 rounded text-lg"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="inline-flex items-center text-white bg-indigo-500 border-0 py-1 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
