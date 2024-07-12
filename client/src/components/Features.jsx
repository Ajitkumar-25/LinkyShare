import React from 'react';
import { FiUser, FiUpload, FiLink, FiMail, FiLock, FiSmartphone } from 'react-icons/fi';

const Features = () => {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-8 mx-auto">
        <div className="flex flex-col text-center w-full mb-10">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
            Welcome to LinkyShare
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-2xl">
            LinkyShare is your ultimate file sharing platform, designed to make sharing and managing files effortless. Whether you're a casual user or a professional, LinkyShare offers seamless features to securely upload, share, and manage your files.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/3">
            <div className="flex rounded-lg h-full bg-gray-800 p-8 flex-col shadow-md">
              <div className="flex items-center mb-3">
                <FiLock className="text-indigo-500 w-8 h-8" />
                <h2 className="text-white text-lg title-font font-medium ml-3">Secure Sign Up and Login</h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base">
                  Create your account securely and log in to access your files from anywhere. Your data is protected with advanced encryption.
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="flex rounded-lg h-full bg-gray-800 p-8 flex-col shadow-md">
              <div className="flex items-center mb-3">
                <FiUpload className="text-indigo-500 w-8 h-8" />
                <h2 className="text-white text-lg title-font font-medium ml-3">File Uploads</h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base">
                  Upload files of various types, including documents, images, videos, and more. LinkyShare supports a wide range of file formats for maximum flexibility.
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="flex rounded-lg h-full bg-gray-800 p-8 flex-col shadow-md">
              <div className="flex items-center mb-3">
                <FiLink className="text-indigo-500 w-8 h-8" />
                <h2 className="text-white text-lg title-font font-medium ml-3">Instant Download Links</h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base">
                  Get sharable download links for each file you upload. Share these links with anyone to allow them to download your files hassle-free, without needing to sign up.
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="flex rounded-lg h-full bg-gray-800 p-8 flex-col shadow-md">
              <div className="flex items-center mb-3">
                <FiMail className="text-indigo-500 w-8 h-8" />
                <h2 className="text-white text-lg title-font font-medium ml-3">Email Sharing</h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base">
                  Easily share files via email. Enter the recipient's email address, and LinkyShare will send a secure download link directly to their inbox.
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="flex rounded-lg h-full bg-gray-800 p-8 flex-col shadow-md">
              <div className="flex items-center mb-3">
                <FiSmartphone className="text-indigo-500 w-8 h-8" />
                <h2 className="text-white text-lg title-font font-medium ml-3">Responsive Design</h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base">
                  Enjoy a seamless experience across devices with our responsive design. Access LinkyShare from your desktop, tablet, or smartphone.
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="flex rounded-lg h-full bg-gray-800 p-8 flex-col shadow-md">
              <div className="flex items-center mb-3">
                <FiUser className="text-indigo-500 w-8 h-8" />
                <h2 className="text-white text-lg title-font font-medium ml-3">User Management</h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base">
                  Manage users efficiently with user-specific permissions and settings. Ensure smooth collaboration and organization within your team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
