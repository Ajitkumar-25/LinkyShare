import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if token exists in localStorage
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    // Remove token from localStorage and update state
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <header className="text-gray-400 bg-gray-800 body-font shadow-md">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          to="/"
          className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-white lg:items-center lg:justify-center mb-4 md:mb-0"
        >
          <img
            src="logo.svg"
            alt="LinkyShare Logo"
            className="w-16 h-auto mr-2"
          />
          <span className="ml-3 text-2xl xl:block lg:hidden">LinkyShare</span>
        </Link>
        <nav className="flex lg:w-2/5 flex-wrap items-center justify-center md:justify-start text-lg">
          <Link
            to="/"
            className="mr-5 hover:text-white"
            activeClassName="text-white"
          >
            Home
          </Link>
          <Link
            to="/upload"
            className="mr-5 hover:text-white"
            activeClassName="text-white"
          >
            Upload
          </Link>
          <Link
            to="/features"
            className="mr-5 hover:text-white"
            activeClassName="text-white"
          >
            Features
          </Link>
          <Link
            to="/contact"
            className="hover:text-white"
            activeClassName="text-white"
          >
            Contact
          </Link>
        </nav>
        <div className="lg:w-2/5 flex justify-center md:justify-end mt-4 md:mt-0">
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="inline-flex items-center bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg text-white"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="inline-flex items-center bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg text-white"
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
