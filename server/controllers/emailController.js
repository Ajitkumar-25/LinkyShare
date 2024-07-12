const nodemailer = require("nodemailer");
const CryptoJS = require("crypto-js");
const { getEmailTemplate } = require("../utils/emailTemplate");

exports.sendEmail = async (req, res) => {
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
      subject: "Download Links from LinkyShare",
      html: getEmailTemplate(decryptedLinks),
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
};

exports.contactus = async (req, res) => {
  const { name, email, message } = req.body;

  try {
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
      subject: "LinkyShare",
      html: `
        <h3>Contact Details</h3>
        <ul>
          <li>Name: ${name}</li>
          <li>Email: ${email}</li>
        </ul>
        <p>Message:</p>
        <p>${message}</p>
      `,
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
    console.error("Email sending error:", error);
    res.status(500).json({ error: "Email sending error" });
  }
};
