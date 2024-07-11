const express = require("express");
const app = express();
require("dotenv").config();
const multer = require("multer");
const cors = require("cors");

const cloudinary = require("cloudinary").v2;
const nodemailer = require("nodemailer");
const CryptoJS = require("crypto-js");

app.use(express.json());
app.use(cors());
const upload = multer({ storage: multer.memoryStorage() });

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.post("/api/upload", upload.array("files"), async (req, res) => {
  try {
    const uploadedFiles = await Promise.all(
      req.files.map(async (file) => {
        return new Promise((resolve, reject) => {
          const upload_stream = cloudinary.uploader.upload_stream(
            { resource_type: "auto", flags: "attachment" },
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
    console.error("File upload error:", error);
    res.status(500).json({ error: "File upload failed" });
  }
});

app.post("/api/send-email", async (req, res) => {
  const { email, links } = req.body;

  try {
    const decryptedLinks = links.map((encryptedLink) =>
      CryptoJS.AES.decrypt(encryptedLink, "mynameisajit").toString(
        CryptoJS.enc.Utf8
      )
    );

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Download Links",
      html: `<p>Here are your download links:</p>
            <ul>
              ${decryptedLinks
                .map(
                  (link) =>
                    `<li><a href="${link}?fl_attachment" download>Download File</a></li>`
                )
                .join("")}
            </ul>`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Email sending error:", error);
        res.status(500).send(error.toString());
      } else {
        console.log("Email sent:", info.response);
        res.send("Email sent: " + info.response);
      }
    });
  } catch (error) {
    console.error("Decryption error:", error);
    res.status(500).json({ error: "Decryption error" });
  }
});

app.listen(process.env.PORT, () => {
  console.log("Server is running on port", process.env.PORT);
});
