require('dotenv').config();

const nodemailer = require("nodemailer");

const {
  MAILING_SERVICE_CLIENT_ID,
  MAILING_SERVICE_CLIENT_SECRET,
  MAILING_SERVICE_REFRESH_TOKEN,
  SENDER_EMAIL_ADDRESS,
  MAILING_SERVICE_ACCESS_TOKEN
} = process.env;

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
      type: 'OAuth2',
      user: SENDER_EMAIL_ADDRESS,
      clientId: MAILING_SERVICE_CLIENT_ID,
      clientSecret: MAILING_SERVICE_CLIENT_SECRET,
      refreshToken: MAILING_SERVICE_REFRESH_TOKEN,
      accessToken: MAILING_SERVICE_ACCESS_TOKEN
  }
});

const send = ({name, email, subject, message}) => {

  const from = name && email ? `${name} <${email}>` : `${name || email}`

  const mail = {
      from,
      to: 'ivan.audeamus@gmail.com',
      subject: `Message from Developer Portfolio - ${subject}`,
      text: message,
      html:`<p>${message}</p>`,
      replyTo: from
    }

  return new Promise((resolve, reject) => {
    transporter.sendMail(mail, function(err, info) {
      if (err) {
          console.log(err);
      } else {
          // see https://nodemailer.com/usage
          console.log("success");
      }
      transporter.close();
    });
  })
}


module.exports = send