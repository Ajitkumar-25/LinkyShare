const cloudinary = require('../config/cloudinary');
const CryptoJS = require('crypto-js');

exports.uploadFiles = async (req, res) => {
  try {
    const uploadedFiles = await Promise.all(
      req.files.map(async (file) => {
        return new Promise((resolve, reject) => {
          const upload_stream = cloudinary.uploader.upload_stream(
            { resource_type: 'auto', flags: 'attachment' },
            (error, result) => {
              if (error) reject(error);
              resolve(result);
            }
          );
          upload_stream.end(file.buffer);
        });
      })
    );

    const downloadLinks = uploadedFiles.map((file) => file.secure_url);
    res.json({ downloadLinks });
  } catch (error) {
    console.error('File upload error:', error);
    res.status(500).json({ error: 'File upload failed' });
  }
};
