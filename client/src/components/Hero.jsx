import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="hero.jpeg"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-4xl font-extrabold text-transparent sm:text-6xl">
            Share Your Files
            <br className="hidden lg:inline-block" />
            with Ease
          </h1>
          <p className="mt-4 max-w-3xl text-xl sm:text-2xl leading-relaxed">
            Effortlessly upload and share your files through secure URLs.
            Whether it's documents, images, or videos, our platform ensures fast
            and reliable sharing with just a few clicks.
          </p>
          <div className="flex justify-center">
            <Link to={'/signup'} className="my-4 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
