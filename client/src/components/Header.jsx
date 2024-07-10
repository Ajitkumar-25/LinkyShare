import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav className="flex lg:w-2/5 flex-wrap items-center  text-xl md:ml-auto">
          <Link to={"/"} className="mr-5 hover:text-white">
            Home
          </Link>
          <Link to={"/upload"} className="mr-5 hover:text-white" href="/">
            Upload
          </Link>
          <Link className="mr-5 hover:text-white" href="/">
            Features
          </Link>
          <Link className="hover:text-white" href="/">
            Contact
          </Link>
        </nav>
        <Link
          className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-white lg:items-center lg:justify-center mb-4 md:mb-0"
          href="/"
        >
          <img src="logo.svg" alt="" />
          <span className="ml-3 text-xl xl:block lg:hidden">LinkyShare</span>
        </Link>
        <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
          <Link
            to={"/login"}
            className="inline-flex items-center text-white bg-indigo-500 border-0 py-1 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
