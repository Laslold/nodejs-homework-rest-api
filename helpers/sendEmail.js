const nodemailer = require("nodemailer");

const { MAIL_PASS, MAIL_USER } = process.env;

const nodemailerConfig = {
  host: "smtp.ukr.net",
  port: 465,
  secure: true,
  auth: {
    user: MAIL_USER,
    pass: MAIL_PASS,
  },
};
const transport = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async (data) => {
  const email = { ...data, from: MAIL_USER };
  await transport.sendMail(email);
  return true;
};

module.exports = sendEmail;
