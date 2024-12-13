const nodemailer = require("nodemailer");

const smtpTransport = nodemailer.createTransport({
  service: "Gmail", //네이버를 사용할 경우에는 "Naver"
  port: 587,
  secure: false,
  auth: {
    user: process.env.NODEMAILER_USER,
    pass: process.env.NODEMAILER_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

module.exports = {
  smtpTransport,
};
