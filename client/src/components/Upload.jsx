import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import CryptoJS from "crypto-js";

const Upload = () => {
  const [files, setFiles] = useState([]);
  const [email, setEmail] = useState("");
  const [downloadLinks, setDownloadLinks] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    setFiles(acceptedFiles);
  }, []);

  const uploadFiles = async () => {
    const formData = new FormData();
    files.forEach((file) => formData.append("files", file));

    try {
      const response = await axios.post(
        "http://localhost:5001/api/upload",
        formData
      );
      const { downloadLinks } = response.data;
      setDownloadLinks(downloadLinks);
    } catch (error) {
      console.error("File upload error:", error);
    }
  };

  const sendEmail = async () => {
    try {
      const encryptedLinks = downloadLinks.map((link) =>
        CryptoJS.AES.encrypt(link, "mynameisajit").toString()
      );

      await axios.post("http://localhost:5001/api/send-email", {
        email,
        links: encryptedLinks,
      });

      alert("Email sent!");
    } catch (error) {
      console.error("Email sending error:", error);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="flex flex-col items-center justify-center min-h-96 bg-gray-900 p-4">
      <div
        {...getRootProps()}
        className={`flex flex-col items-center justify-center border-4 border-dotted rounded-md p-8 cursor-pointer transition-colors duration-300 h-1/2 w-1/2 mb-4 ${
          isDragActive ? "border-blue-500 bg-blue-100" : "border-blue-400"
        }`}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p className="text-blue-500 text-2xl">Drop the files here ...</p>
        ) : (
          <p className="text-green-500 text-2xl">
            Drag 'n' drop some files here, or click to select files
          </p>
        )}
      </div>
      <div className="mt-4 w-1/2 text-center">
        {files.length > 0 && (
          <div className="p-4 rounded-md bg-gray-800">
            <h2 className="text-gray-200 mb-2 text-xl">Chosen Files:</h2>
            <ul>
              {files.map((file, index) => (
                <li key={index} className="text-gray-200 text-lg">
                  {file.name}
                </li>
              ))}
            </ul>
            <button
              onClick={uploadFiles}
              className="mt-4 px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600"
            >
              Upload Files
            </button>
          </div>
        )}
      </div>
      {downloadLinks.length > 0 && (
        <div className="mt-4 w-1/2 p-4 rounded-md bg-gray-800 text-center">
          <h2 className="text-gray-200 mb-2 text-xl">Generated Links:</h2>
          <ul>
            {downloadLinks.map((link, index) => (
              <li key={index} className="text-gray-200 text-lg break-all">
                <a
                  href={`${link}?fl_attachment`}
                  download
                  className="text-blue-500 hover:underline"
                >
                  Download File {index + 1}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 mx-auto  ">
            <input
              type="email"
              placeholder="Recipient's Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-2 border rounded-md w-64 mr-2 bg-gray-700 focus:outline-none focus:ring focus:border-indigo-300 text-gray-200"
            />
            <button
              onClick={sendEmail}
              className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:border-indigo-300"
            >
              Send Email
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Upload;
